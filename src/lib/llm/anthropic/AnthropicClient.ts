import Anthropic, { ClientOptions } from "@anthropic-ai/sdk";
import { LLMClient } from "../LLMClient";

export class AnthropicClient extends LLMClient {
  public readonly type = "anthropic";
  private client: Anthropic;
  constructor(
    modelName: string,
    clientOptions: ClientOptions,
    userProvidedInstructions?: string,
  ) {
    super(modelName, clientOptions, userProvidedInstructions);
    this.client = new Anthropic(clientOptions);
  }
}
