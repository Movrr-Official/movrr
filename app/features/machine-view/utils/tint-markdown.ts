/**
 * Escape + lightly tint Markdown source for the machine document pane.
 * Output is trusted HTML for our own generated Markdown only.
 */
export function tintMachineMarkdown(markdown: string): string {
  return markdown
    .split("\n")
    .map((line) => tintLine(escapeHtml(line), line))
    .join("\n");
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function tintInline(escaped: string) {
  return escaped
    .replace(
      /`([^`]+)`/g,
      '<span class="text-[#b7f5c8]">`$1`</span>',
    )
    .replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<span class="text-white/55">[</span><span class="text-[#cfe7ff]">$1</span><span class="text-white/55">](</span><span class="text-[#72e09a]/85">$2</span><span class="text-white/55">)</span>',
    )
    .replace(
      /\*\*([^*]+)\*\*/g,
      '<span class="text-white/90">**$1**</span>',
    );
}

function tintLine(escaped: string, raw: string) {
  if (/^#{1,6}\s/.test(raw)) {
    return `<span class="text-[#72e09a]">${escaped}</span>`;
  }
  if (/^---+$/.test(raw.trim())) {
    return `<span class="text-white/20">${escaped}</span>`;
  }
  if (/^\s*[-*]\s+/.test(raw) || /^\s*\d+\.\s+/.test(raw)) {
    return tintInline(escaped).replace(
      /^(\s*(?:[-*]|\d+\.)\s+)/,
      '<span class="text-white/35">$1</span>',
    );
  }
  if (/^\|.+\|$/.test(raw.trim())) {
    return `<span class="text-white/55">${tintInline(escaped)}</span>`;
  }
  return tintInline(escaped);
}
