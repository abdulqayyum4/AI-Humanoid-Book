<!--
Sync Impact Report:
- Version change: N/A → 1.0.0
- Modified principles: 6 principles added (AI-native workflow, Technical accuracy, System coherence, Content consistency, Spec-driven development, No hallucinations)
- Added sections: Technical Standards and Constraints, Development Workflow and Quality Standards
- Removed sections: None
- Templates requiring updates: ✅ All checked (plan-template.md, spec-template.md, tasks-template.md)
- Follow-up TODOs: None
-->
# AI-Native Textbook + Integrated RAG Chatbot System Constitution
<!-- Example: Spec Constitution, TaskFlow Constitution, etc. -->

## Core Principles

### AI-native writing workflow using Spec-Kit Plus + Claude Code terminals
All development and writing must utilize the Spec-Driven workflow with Spec-Kit Plus and Claude Code terminals for maximum efficiency and consistency.
<!-- Example: Every feature starts as a standalone library; Libraries must be self-contained, independently testable, documented; Clear purpose required - no organizational-only libraries -->

### Technical accuracy and developer clarity
All explanations about AI, agents, RAG, SDKs, and automation must be technically correct and verifiable, targeting junior to mid-level developers (ages 15-25).
<!-- Example: Every library exposes functionality via CLI; Text in/out protocol: stdin/args → stdout, errors → stderr; Support JSON + human-readable formats -->

### System-level coherence
Book content, code samples, and the chatbot's RAG index must never contradict each other, maintaining consistency across all materials.
<!-- Example: TDD mandatory: Tests written → User approved → Tests fail → Then implement; Red-Green-Refactor cycle strictly enforced -->

### Content consistency
Terminology, formatting, tone, and examples must stay consistent across the entire book.
<!-- Example: Focus areas requiring integration tests: New library contract tests, Contract changes, Inter-service communication, Shared schemas -->

### Spec-Driven development
Content written using the Spec-Driven workflow (Specs → Chapters → Refinements) with all architectural diagrams generated inside Claude Code.
<!-- Example: Text I/O ensures debuggability; Structured logging required; Or: MAJOR.MINOR.BUILD format; Or: Start simple, YAGNI principles -->

### No hallucinations allowed


RAG chatbot must answer strictly from book content, unless allowed fallback is defined, with no hallucinations permitted in chatbot responses.

## Technical Standards and Constraints
Book Format: Docusaurus v3 site deployed on GitHub Pages; Writing Process: Research-concurrent (research and writing happen together); Chatbot Stack: OpenAI Agents/ChatKit SDK, FastAPI backend, Neon Serverless Postgres for metadata + chat history, Qdrant Cloud (Free Tier) for vector search; RAG Requirements: Must support 'answer from full book' and 'answer from user-selected text only' with latency target < 2 seconds for typical queries.

## Development Workflow and Quality Standards
All code must be reproducible and tested inside Claude Code or local environment; Every chapter must end with Key ideas summary, Developer checklist, and Code example(s) where applicable; All embeddings, chunking logic, and database schema must be documented inside the book; All architectural diagrams must be generated inside Claude Code.

## Governance
Constitution supersedes all other practices; Amendments require documentation, approval, migration plan; All implementations must verify compliance with these principles; Complexity must be justified; Use CLAUDE.md for runtime development guidance.

**Version**: 1.0.0 | **Ratified**: 2025-12-14 | **Last Amended**: 2025-12-14
