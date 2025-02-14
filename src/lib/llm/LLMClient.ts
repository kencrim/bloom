import { ClientOptions } from "@anthropic-ai/sdk";

export abstract class LLMClient {
  public type: "openai" | "anthropic" | string = "";
  public modelName: string; // TODO: Make this an enum
  public clientOptions: ClientOptions; // TODO: Openai
  public userProvidedInstructions?: string;

  constructor(
    modelName: string,
    clientOptions: ClientOptions,
    userProvidedInstructions?: string,
  ) {
    if (!this.type) {
      throw new Error("LLMClient type must be set");
    }
    this.modelName = modelName;
    this.clientOptions = clientOptions;
    this.userProvidedInstructions = userProvidedInstructions;
  }
}
