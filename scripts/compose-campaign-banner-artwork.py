"""Project the genuine MOVRR icon and finish the full-height artwork split.

Requires Pillow, numpy and opencv-python. The input fixture locks the scene,
panel mounting and artwork. Changes are limited to the printed symbol and the
lower divider correction; the rest of the photograph stays pixel-identical.
"""
import argparse
from pathlib import Path
import cv2
import numpy as np
from PIL import Image

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('--base', type=Path, required=True)
parser.add_argument('--icon', type=Path, required=True)
parser.add_argument('--output', type=Path, required=True)
args = parser.parse_args()
im = Image.open(args.base).convert('RGB')
assert im.size == (1086, 1448), 'Coordinates require the approved base fixture.'
before = np.array(im)
rgb = before.astype(float)
h, w = rgb.shape[:2]
gate = np.zeros((h, w), np.uint8)
cv2.fillPoly(gate, [np.array([[344,1009],[359,990],[377,992],[387,1015],
                             [387,1035],[369,1052],[352,1045],[341,1027]])], 1)
dark = (np.max(rgb, axis=2) < 100).astype(np.uint8) * gate
_, labels, stats, centres = cv2.connectedComponentsWithStats(dark)
candidates = [i for i in range(1,len(stats)) if stats[i,cv2.CC_STAT_AREA] > 30]
label = min(candidates, key=lambda i: np.linalg.norm(centres[i]-[365,1021]))
old = (labels == label).astype(np.uint8)
erase = cv2.dilate(old, np.ones((7,7), np.uint8)) > 0
# Recover the local smooth green illumination from the surrounding print.
yy, xx = np.indices((h,w))
samples = ((xx>=339)&(xx<=390)&(yy>=987)&(yy<=1056)&~erase &
           (rgb[:,:,1]>rgb[:,:,0]+22)&(rgb[:,:,1]>rgb[:,:,2]+8))
design = np.column_stack([np.ones(samples.sum()), xx[samples]-365, yy[samples]-1020])
coef = np.linalg.lstsq(design, rgb[samples], rcond=None)[0]
pixels = np.column_stack([np.ones(erase.sum()), xx[erase]-365, yy[erase]-1020])
rgb[erase] = pixels @ coef
# Make the existing upper divider continue straight to the lower edge. The
# generated peach circle must not intrude into the green half at the bottom.
green = (rgb[:,:,1]>rgb[:,:,0]+22)&(rgb[:,:,1]>rgb[:,:,2]+8)
edge_samples = []
for row in list(range(950,980))+list(range(1050,1080)):
    columns = np.where(green[row,400:432])[0]
    if len(columns): edge_samples.append([row,400+columns[-1]])
edge_samples = np.array(edge_samples)
divider = np.polyfit(edge_samples[:,0],edge_samples[:,1]+.5,1)
face_candidate = ((rgb.max(axis=2)>90)&(rgb.min(axis=2)>55)).astype(np.uint8)
face_gate = np.zeros((h,w),np.uint8);face_gate[916:1195,318:502]=1
_, face_labels, _, _ = cv2.connectedComponentsWithStats(face_candidate*face_gate)
face = (face_labels==face_labels[970,360]).astype(np.uint8)
face_contours,_ = cv2.findContours(face,cv2.RETR_EXTERNAL,cv2.CHAIN_APPROX_SIMPLE)
cv2.drawContours(face,face_contours,-1,1,-1)
face = cv2.erode(face,np.ones((3,3),np.uint8))>0
line = np.polyval(divider,yy)
split_alpha = np.clip(line+.5-xx,0,1)
split_region = face&(yy>=1085)&(xx>=400)&(xx<=line+1)
split_alpha *= split_region
lower_samples = face&green&(xx>=375)&(xx<413)&(yy>=1060)&(yy<=1175)
lower_design = np.column_stack([np.ones(lower_samples.sum()),xx[lower_samples]-365,yy[lower_samples]-1020])
lower_coef = np.linalg.lstsq(lower_design,rgb[lower_samples],rcond=None)[0]
split_pixels = np.column_stack([np.ones(split_region.sum()),xx[split_region]-365,yy[split_region]-1020])
shade = split_pixels @ lower_coef
weight = split_alpha[split_region,None]
rgb[split_region] = rgb[split_region]*(1-weight)+shade*weight
# Use the original asset's alpha verbatim; only colour and perspective change.
icon = Image.open(args.icon).convert('RGBA')
icon = icon.crop(icon.getbbox())
alpha = np.array(icon)[:,:,3].astype(float)/255
ih, iw = alpha.shape
src = np.float32([[0,0],[iw-1,0],[iw-1,ih-1],[0,ih-1]])
dst = np.float32([[344,1006],[375,992],[383,1036],[352,1050]])
matrix = cv2.getPerspectiveTransform(src, dst)
# Area-filter the projected original outline for a smooth small print edge.
s = 4
local = np.diag([s,s,1]) @ matrix
warped = cv2.warpPerspective(alpha, local, (w*s,h*s), flags=cv2.INTER_LINEAR)
projected = cv2.resize(warped, (w,h), interpolation=cv2.INTER_AREA)
ink = np.array([17,20,18])
rgb = rgb*(1-projected[:,:,None]) + ink*projected[:,:,None]
after = np.clip(np.rint(rgb),0,255).astype(np.uint8)
permitted = erase | (projected>0) | split_region
changed = np.any(after!=before,axis=2)
assert not np.any(changed[~permitted]), 'Changes escaped the symbol mask.'
assert not np.any(changed[:985]) and not np.any(changed[1195:])
args.output.parent.mkdir(parents=True,exist_ok=True)
Image.fromarray(after).save(args.output)
print(f'Genuine icon projected and lower split straightened; {changed.sum()} changed pixels; zero changes outside artwork masks.')
