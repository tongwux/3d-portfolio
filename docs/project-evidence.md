# Project evidence and next refactoring priorities

Reviewed October 20, 2026. Portfolio copy describes source-level implementations, not independently verified production outcomes.

| Project | Implementation evidence | Current boundary |
| --- | --- | --- |
| ChatterSphere | `Downloads/ChatterSphere/mern-chat-app-master/package.json`, frontend/package.json, backend/socket/socket.js | MERN one-to-one chat; tutorial attribution retained. Socket identity currently trusts a client query parameter. No implemented group chat. |
| Trade Titan | Local personal Stock Desk: app/page.tsx, app/api/watchlist/route.ts, app/api/quotes/route.ts, app/investment-desk.tsx | React/TypeScript, Next.js/Vinext and Cloudflare D1 foundation; manual trade logging, not broker execution. No private records or screenshots are published. |
| Somni Sleep | Somni_Sleep_New/Managers/AudioManager.swift, SleepCoachView.swift, OpenAIService.swift | SwiftUI native prototype, AVFoundation audio, URLSession/Keychain structure; sample sleep data and incomplete coach configuration. |
| Tarot Reading | package.json, app/page.tsx, app/components/TarotCard.tsx | Next.js/TypeScript/Framer Motion interaction study; fixed text for 21 cards, not AI-generated readings. |

Repository links are the public URLs attached to each portfolio card. Trade Titan's next-iteration reference is the official [Apna College Zerodha course repository](https://github.com/apna-college/Zerodha); reference code does not establish implemented features or original authorship. MERN is a reference architecture, distinct from the current Stock Desk implementation.

## Junior SDE project selection — engineering assessment

1. **Trade Titan:** strongest candidate for a flagship after a bounded paper-trading implementation. Start with order-state transitions, a cash/position ledger, repeat-submission protection, and tests for insufficient cash, overselling, cancellation and concurrency. Keep market-provider caching/failure behavior observable. Do not require real-money brokerage integration.
2. **ChatterSphere:** good backend/realtime complement after socket authentication, per-conversation authorization, pagination, multi-device presence and reconnect tests. Move the application out of its Downloads-style directory and document original contributions separately from the tutorial base.
3. **ZYMO:** strong business-workflow option. Current master already contains Supabase session auth, signup and password recovery, despite the older README's demo-login description. Project/order data remains a workflow prototype. Prioritize reproducible build tooling, persisted resource APIs and permission tests. Do not describe this as an implemented sequencing pipeline.
4. **Somni Sleep:** promote for iOS applications; repair credential initialization, empty-history handling and audio lifecycle tests first. No macOS/Xcode build was performed in this review.
5. **Tarot Reading:** keep as a frontend interaction example. Upgrade dependencies, implement unbiased shuffling, keyboard controls and state-transition tests before optional AI expansion.
6. **DeepStudy:** broader scope and many unimplemented integration claims. First deliver one working teacher conversation end to end; postpone multi-agent orchestration and voice expansion.

Empty repositories and course-only submissions should not displace these projects as flagship portfolio entries. The restored 3D portfolio is a useful deployed frontend example, but complements rather than replaces a tested backend project. These are recommendations based on this code review, not hiring-outcome guarantees.
