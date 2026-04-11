The role of this file is to describe common mistakes and confusion points that agents may encounter as they work in this project. If you ever encounter something in the project that surprises you, please alert the developer working with you to indicate that this is the case in the AgentMD file to help prevent future agents from having the same issue.

Proceed with implementing any necessary changes, optimizations, or refactoring to the codebase without constraints related to existing user data or production concerns. Focus on improving code quality, architecture, performance, and developer experience. Ensure all modifications are properly documented, include comprehensive error handling, and maintain backward compatibility where feasible. Create migration strategies or data seeding mechanisms as needed for future deployment scenarios.

## Common gotchas found while working

In sandboxed Codex runs, `pnpm` may fail with `EPERM` while resolving `C:\Users\Akalu` or with store mismatches. Set `HOME`, `USERPROFILE`, `TEMP` and `TMP` to a writable workspace path and reuse the existing store at `A:\.pnpm-store\v10`.
