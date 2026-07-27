# MOVRR Machine View

The Machine View is generated from the same typed English and Dutch dictionaries
used by the HUMAN website. It does not maintain a second marketing-content copy.

## Routes

- `/machine` and `/nl/machine`: rendered, accessible Machine Views
- `/machine.md` and `/nl/machine.md`: statically generated Markdown exports
- `/llms.txt`: discovery index linking to the complete exports

## Analytics

Events use the existing consent-gated Vercel Analytics integration:

| Event | Trigger | Properties |
| --- | --- | --- |
| `machine_view_opened` | Machine View opens after analytics consent | `locale`, `format` |
| `machine_view_copy_markdown` | Complete Markdown copy succeeds | `locale`, `characters` |
| `machine_view_copy_failed` | Browser clipboard strategies fail | `locale` |
| `machine_view_return_human` | HUMAN is selected from Machine View | none |

## Extension point

The canonical dictionaries are transformed into a format-neutral
`MachineDocument`. Markdown is one serializer. JSON, YAML, XML, plain-text, API,
or knowledge-graph serializers can consume the same document model later.
