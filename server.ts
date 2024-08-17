import { createRequestHandler } from "@remix-run/server-runtime";
import type { Serve } from "bun";
import * as build from "./build/server/index.js";

const remix = createRequestHandler(build, Bun.env.NODE_ENV);

export default {
	port: 3001,
	async fetch(request) {
		return remix(request);
	},
} satisfies Serve;
