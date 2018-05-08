import { ConsoleAdapter, MemoryStorage } from "botbuilder";
import { Topic, doTopic, consoleOnTurn, prettyConsole } from "botbuilder-topical";
import { Root } from "./topics";

Topic.init(new MemoryStorage());

const adapter = new ConsoleAdapter()
    .use(prettyConsole);

consoleOnTurn(adapter, context => doTopic(Root, context));
