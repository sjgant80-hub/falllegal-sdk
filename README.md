# @ai-native-solutions/falllegal-sdk

UK law engine + matter-management primitives for SRA-regulated firms. Extracted from the sovereign single-file falllegal shell.

> **Research / informational only. Not legal advice. Not a regulatory submission.** Verify against primary sources.

## What's inside

- **12 practice areas** — civil-lit, conveyancing, family, crime, wills-probate, employment, commercial, immigration, landlord-tenant, PI, clinical-neg, other
- **30 strategic weaves** — named fact patterns (`Limitation Shield`, `Bolitho Override`, `Montgomery Consent`, `Conflict Wall`, `CFA Lifeline`, `Part 36 Trap`, `Section 8 Mandatory`, `Solicitors Act Assessment`, …) with authorities, opposition moves, counters, why-it-wins, example case
- **14-statute corpus** — SA 1974, LSA 2007, LA 1980, CPR, FLA 1996, LRA 2002, WA 1837, IA 1975, EA 2010, ERA 1996, CA 2006, HA 1988, CA 1989, PACE 1984, MCA 1973 with key provisions
- **T0 offline Q&A** — 14 hard-coded rules (PI limitation, CFA vs DBA, SRA conduct, Bolam, conveyancing protocol, wasted costs, s.21 vs s.8, EA 2010, ET time limits, Norwich Pharmacal, CPR 31, WP rule, privilege types)
- **Conflict check** — verbatim port of shell logic (name/email/opposing-party matching against clients + matters)
- **Hash-linked audit chain** — SHA-256, prev→doc chaining, tamper-evident, SRA Reg 13.5 friendly
- **Retention helper** — 6-year clock from `closedAt`
- **Record factories** — `newFirm`, `newAdviser`, `newClient` (with KYC/CDD), `newMatter`

## Install

```bash
npm i @ai-native-solutions/falllegal-sdk
```

## Usage

```js
import fl, { findWeaves, askT0, checkConflicts, appendAudit, verifyAuditChain, newMatter } from '@ai-native-solutions/falllegal-sdk';

// Find weaves
findWeaves({ query: 'Bolam' });                 // → Bolitho Override
findWeaves({ agent: 'PROCEDURE' });             // → all procedural weaves
findWeaves({ query: 'limitation' });            // → Limitation Shield, Section 33 Mercy, …

// T0 offline Q&A
askT0('what is the PI limitation period?');     // → { q, a, disclaimer }

// Conflict check
checkConflicts(
  { clientName: 'Ada', partyOpposing: 'Bob' },
  { clients: [{ id: 'c1', firstName: 'Ada', lastName: 'Lovelace' }], matters: [] }
);

// Tamper-evident audit chain (SRA Reg 13.5)
let chain = [];
({ chain } = await appendAudit(chain, { action: 'matter.opened', matterId: 'mt_1' }));
({ chain } = await appendAudit(chain, { action: 'advice.issued', matterId: 'mt_1' }));
await verifyAuditChain(chain); // → { ok: true, breaks: [] }

// Records
const matter = newMatter({ clientId: 'cl_1', refSeq: 42 });
```

## Sibling packages

- `@ai-native-solutions/falllegal-mcp` — MCP stdio server for Claude Desktop / Claude Code
- `@ai-native-solutions/falllegal-api` — HTTP wrapper (Express + Docker)

## License

MIT · AI-Native Solutions
