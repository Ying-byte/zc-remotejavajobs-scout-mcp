#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "remotejavajobs",
  boardId: "remotejavajobs-official",
  domain: "remotejavajobs.com",
  npmName: "zc-remotejavajobs-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
