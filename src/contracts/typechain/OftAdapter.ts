/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export type EnforcedOptionParamStruct = {
  eid: BigNumberish;
  msgType: BigNumberish;
  options: BytesLike;
};

export type EnforcedOptionParamStructOutput = [
  eid: bigint,
  msgType: bigint,
  options: string
] & { eid: bigint; msgType: bigint; options: string };

export type OriginStruct = {
  srcEid: BigNumberish;
  sender: BytesLike;
  nonce: BigNumberish;
};

export type OriginStructOutput = [
  srcEid: bigint,
  sender: string,
  nonce: bigint
] & { srcEid: bigint; sender: string; nonce: bigint };

export type InboundPacketStruct = {
  origin: OriginStruct;
  dstEid: BigNumberish;
  receiver: AddressLike;
  guid: BytesLike;
  value: BigNumberish;
  executor: AddressLike;
  message: BytesLike;
  extraData: BytesLike;
};

export type InboundPacketStructOutput = [
  origin: OriginStructOutput,
  dstEid: bigint,
  receiver: string,
  guid: string,
  value: bigint,
  executor: string,
  message: string,
  extraData: string
] & {
  origin: OriginStructOutput;
  dstEid: bigint;
  receiver: string;
  guid: string;
  value: bigint;
  executor: string;
  message: string;
  extraData: string;
};

export type SendParamStruct = {
  dstEid: BigNumberish;
  to: BytesLike;
  amountLD: BigNumberish;
  minAmountLD: BigNumberish;
  extraOptions: BytesLike;
  composeMsg: BytesLike;
  oftCmd: BytesLike;
};

export type SendParamStructOutput = [
  dstEid: bigint,
  to: string,
  amountLD: bigint,
  minAmountLD: bigint,
  extraOptions: string,
  composeMsg: string,
  oftCmd: string
] & {
  dstEid: bigint;
  to: string;
  amountLD: bigint;
  minAmountLD: bigint;
  extraOptions: string;
  composeMsg: string;
  oftCmd: string;
};

export type OFTLimitStruct = {
  minAmountLD: BigNumberish;
  maxAmountLD: BigNumberish;
};

export type OFTLimitStructOutput = [
  minAmountLD: bigint,
  maxAmountLD: bigint
] & { minAmountLD: bigint; maxAmountLD: bigint };

export type OFTFeeDetailStruct = {
  feeAmountLD: BigNumberish;
  description: string;
};

export type OFTFeeDetailStructOutput = [
  feeAmountLD: bigint,
  description: string
] & { feeAmountLD: bigint; description: string };

export type OFTReceiptStruct = {
  amountSentLD: BigNumberish;
  amountReceivedLD: BigNumberish;
};

export type OFTReceiptStructOutput = [
  amountSentLD: bigint,
  amountReceivedLD: bigint
] & { amountSentLD: bigint; amountReceivedLD: bigint };

export type MessagingFeeStruct = {
  nativeFee: BigNumberish;
  lzTokenFee: BigNumberish;
};

export type MessagingFeeStructOutput = [
  nativeFee: bigint,
  lzTokenFee: bigint
] & { nativeFee: bigint; lzTokenFee: bigint };

export type MessagingReceiptStruct = {
  guid: BytesLike;
  nonce: BigNumberish;
  fee: MessagingFeeStruct;
};

export type MessagingReceiptStructOutput = [
  guid: string,
  nonce: bigint,
  fee: MessagingFeeStructOutput
] & { guid: string; nonce: bigint; fee: MessagingFeeStructOutput };

export interface OftAdapterInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "SEND"
      | "SEND_AND_CALL"
      | "allowInitializePath"
      | "approvalRequired"
      | "combineOptions"
      | "decimalConversionRate"
      | "endpoint"
      | "enforcedOptions"
      | "isComposeMsgSender"
      | "isPeer"
      | "lzReceive"
      | "lzReceiveAndRevert"
      | "lzReceiveSimulate"
      | "msgInspector"
      | "nextNonce"
      | "oApp"
      | "oAppVersion"
      | "oftVersion"
      | "owner"
      | "peers"
      | "preCrime"
      | "quoteOFT"
      | "quoteSend"
      | "renounceOwnership"
      | "send"
      | "setDelegate"
      | "setEnforcedOptions"
      | "setMsgInspector"
      | "setPeer"
      | "setPreCrime"
      | "sharedDecimals"
      | "token"
      | "transferOwnership"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "EnforcedOptionSet"
      | "MsgInspectorSet"
      | "OFTReceived"
      | "OFTSent"
      | "OwnershipTransferred"
      | "PeerSet"
      | "PreCrimeSet"
  ): EventFragment;

  encodeFunctionData(functionFragment: "SEND", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "SEND_AND_CALL",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "allowInitializePath",
    values: [OriginStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "approvalRequired",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "combineOptions",
    values: [BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "decimalConversionRate",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "endpoint", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "enforcedOptions",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isComposeMsgSender",
    values: [OriginStruct, BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isPeer",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "lzReceive",
    values: [OriginStruct, BytesLike, BytesLike, AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "lzReceiveAndRevert",
    values: [InboundPacketStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "lzReceiveSimulate",
    values: [OriginStruct, BytesLike, BytesLike, AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "msgInspector",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nextNonce",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "oApp", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "oAppVersion",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "oftVersion",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "peers", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "preCrime", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "quoteOFT",
    values: [SendParamStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "quoteSend",
    values: [SendParamStruct, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "send",
    values: [SendParamStruct, MessagingFeeStruct, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setDelegate",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setEnforcedOptions",
    values: [EnforcedOptionParamStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setMsgInspector",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setPeer",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setPreCrime",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "sharedDecimals",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(functionFragment: "SEND", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "SEND_AND_CALL",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allowInitializePath",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "approvalRequired",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "combineOptions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "decimalConversionRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "endpoint", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "enforcedOptions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isComposeMsgSender",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isPeer", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lzReceive", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lzReceiveAndRevert",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lzReceiveSimulate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "msgInspector",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "nextNonce", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "oApp", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "oAppVersion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "oftVersion", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "peers", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "preCrime", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "quoteOFT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "quoteSend", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "send", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setDelegate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setEnforcedOptions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMsgInspector",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setPeer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setPreCrime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sharedDecimals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
}

export namespace EnforcedOptionSetEvent {
  export type InputTuple = [_enforcedOptions: EnforcedOptionParamStruct[]];
  export type OutputTuple = [
    _enforcedOptions: EnforcedOptionParamStructOutput[]
  ];
  export interface OutputObject {
    _enforcedOptions: EnforcedOptionParamStructOutput[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace MsgInspectorSetEvent {
  export type InputTuple = [inspector: AddressLike];
  export type OutputTuple = [inspector: string];
  export interface OutputObject {
    inspector: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OFTReceivedEvent {
  export type InputTuple = [
    guid: BytesLike,
    srcEid: BigNumberish,
    toAddress: AddressLike,
    amountReceivedLD: BigNumberish
  ];
  export type OutputTuple = [
    guid: string,
    srcEid: bigint,
    toAddress: string,
    amountReceivedLD: bigint
  ];
  export interface OutputObject {
    guid: string;
    srcEid: bigint;
    toAddress: string;
    amountReceivedLD: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OFTSentEvent {
  export type InputTuple = [
    guid: BytesLike,
    dstEid: BigNumberish,
    fromAddress: AddressLike,
    amountSentLD: BigNumberish,
    amountReceivedLD: BigNumberish
  ];
  export type OutputTuple = [
    guid: string,
    dstEid: bigint,
    fromAddress: string,
    amountSentLD: bigint,
    amountReceivedLD: bigint
  ];
  export interface OutputObject {
    guid: string;
    dstEid: bigint;
    fromAddress: string;
    amountSentLD: bigint;
    amountReceivedLD: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PeerSetEvent {
  export type InputTuple = [eid: BigNumberish, peer: BytesLike];
  export type OutputTuple = [eid: bigint, peer: string];
  export interface OutputObject {
    eid: bigint;
    peer: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PreCrimeSetEvent {
  export type InputTuple = [preCrimeAddress: AddressLike];
  export type OutputTuple = [preCrimeAddress: string];
  export interface OutputObject {
    preCrimeAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface OftAdapter extends BaseContract {
  connect(runner?: ContractRunner | null): OftAdapter;
  waitForDeployment(): Promise<this>;

  interface: OftAdapterInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  SEND: TypedContractMethod<[], [bigint], "view">;

  SEND_AND_CALL: TypedContractMethod<[], [bigint], "view">;

  allowInitializePath: TypedContractMethod<
    [origin: OriginStruct],
    [boolean],
    "view"
  >;

  approvalRequired: TypedContractMethod<[], [boolean], "view">;

  combineOptions: TypedContractMethod<
    [_eid: BigNumberish, _msgType: BigNumberish, _extraOptions: BytesLike],
    [string],
    "view"
  >;

  decimalConversionRate: TypedContractMethod<[], [bigint], "view">;

  endpoint: TypedContractMethod<[], [string], "view">;

  enforcedOptions: TypedContractMethod<
    [eid: BigNumberish, msgType: BigNumberish],
    [string],
    "view"
  >;

  isComposeMsgSender: TypedContractMethod<
    [arg0: OriginStruct, arg1: BytesLike, _sender: AddressLike],
    [boolean],
    "view"
  >;

  isPeer: TypedContractMethod<
    [_eid: BigNumberish, _peer: BytesLike],
    [boolean],
    "view"
  >;

  lzReceive: TypedContractMethod<
    [
      _origin: OriginStruct,
      _guid: BytesLike,
      _message: BytesLike,
      _executor: AddressLike,
      _extraData: BytesLike
    ],
    [void],
    "payable"
  >;

  lzReceiveAndRevert: TypedContractMethod<
    [_packets: InboundPacketStruct[]],
    [void],
    "payable"
  >;

  lzReceiveSimulate: TypedContractMethod<
    [
      _origin: OriginStruct,
      _guid: BytesLike,
      _message: BytesLike,
      _executor: AddressLike,
      _extraData: BytesLike
    ],
    [void],
    "payable"
  >;

  msgInspector: TypedContractMethod<[], [string], "view">;

  nextNonce: TypedContractMethod<
    [arg0: BigNumberish, arg1: BytesLike],
    [bigint],
    "view"
  >;

  oApp: TypedContractMethod<[], [string], "view">;

  oAppVersion: TypedContractMethod<
    [],
    [[bigint, bigint] & { senderVersion: bigint; receiverVersion: bigint }],
    "view"
  >;

  oftVersion: TypedContractMethod<
    [],
    [[string, bigint] & { interfaceId: string; version: bigint }],
    "view"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  peers: TypedContractMethod<[eid: BigNumberish], [string], "view">;

  preCrime: TypedContractMethod<[], [string], "view">;

  quoteOFT: TypedContractMethod<
    [_sendParam: SendParamStruct],
    [
      [
        OFTLimitStructOutput,
        OFTFeeDetailStructOutput[],
        OFTReceiptStructOutput
      ] & {
        oftLimit: OFTLimitStructOutput;
        oftFeeDetails: OFTFeeDetailStructOutput[];
        oftReceipt: OFTReceiptStructOutput;
      }
    ],
    "view"
  >;

  quoteSend: TypedContractMethod<
    [_sendParam: SendParamStruct, _payInLzToken: boolean],
    [MessagingFeeStructOutput],
    "view"
  >;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  send: TypedContractMethod<
    [
      _sendParam: SendParamStruct,
      _fee: MessagingFeeStruct,
      _refundAddress: AddressLike
    ],
    [
      [MessagingReceiptStructOutput, OFTReceiptStructOutput] & {
        msgReceipt: MessagingReceiptStructOutput;
        oftReceipt: OFTReceiptStructOutput;
      }
    ],
    "payable"
  >;

  setDelegate: TypedContractMethod<
    [_delegate: AddressLike],
    [void],
    "nonpayable"
  >;

  setEnforcedOptions: TypedContractMethod<
    [_enforcedOptions: EnforcedOptionParamStruct[]],
    [void],
    "nonpayable"
  >;

  setMsgInspector: TypedContractMethod<
    [_msgInspector: AddressLike],
    [void],
    "nonpayable"
  >;

  setPeer: TypedContractMethod<
    [_eid: BigNumberish, _peer: BytesLike],
    [void],
    "nonpayable"
  >;

  setPreCrime: TypedContractMethod<
    [_preCrime: AddressLike],
    [void],
    "nonpayable"
  >;

  sharedDecimals: TypedContractMethod<[], [bigint], "view">;

  token: TypedContractMethod<[], [string], "view">;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "SEND"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "SEND_AND_CALL"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "allowInitializePath"
  ): TypedContractMethod<[origin: OriginStruct], [boolean], "view">;
  getFunction(
    nameOrSignature: "approvalRequired"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "combineOptions"
  ): TypedContractMethod<
    [_eid: BigNumberish, _msgType: BigNumberish, _extraOptions: BytesLike],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "decimalConversionRate"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "endpoint"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "enforcedOptions"
  ): TypedContractMethod<
    [eid: BigNumberish, msgType: BigNumberish],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "isComposeMsgSender"
  ): TypedContractMethod<
    [arg0: OriginStruct, arg1: BytesLike, _sender: AddressLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "isPeer"
  ): TypedContractMethod<
    [_eid: BigNumberish, _peer: BytesLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "lzReceive"
  ): TypedContractMethod<
    [
      _origin: OriginStruct,
      _guid: BytesLike,
      _message: BytesLike,
      _executor: AddressLike,
      _extraData: BytesLike
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "lzReceiveAndRevert"
  ): TypedContractMethod<[_packets: InboundPacketStruct[]], [void], "payable">;
  getFunction(
    nameOrSignature: "lzReceiveSimulate"
  ): TypedContractMethod<
    [
      _origin: OriginStruct,
      _guid: BytesLike,
      _message: BytesLike,
      _executor: AddressLike,
      _extraData: BytesLike
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "msgInspector"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "nextNonce"
  ): TypedContractMethod<
    [arg0: BigNumberish, arg1: BytesLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "oApp"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "oAppVersion"
  ): TypedContractMethod<
    [],
    [[bigint, bigint] & { senderVersion: bigint; receiverVersion: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "oftVersion"
  ): TypedContractMethod<
    [],
    [[string, bigint] & { interfaceId: string; version: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "peers"
  ): TypedContractMethod<[eid: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "preCrime"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "quoteOFT"
  ): TypedContractMethod<
    [_sendParam: SendParamStruct],
    [
      [
        OFTLimitStructOutput,
        OFTFeeDetailStructOutput[],
        OFTReceiptStructOutput
      ] & {
        oftLimit: OFTLimitStructOutput;
        oftFeeDetails: OFTFeeDetailStructOutput[];
        oftReceipt: OFTReceiptStructOutput;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "quoteSend"
  ): TypedContractMethod<
    [_sendParam: SendParamStruct, _payInLzToken: boolean],
    [MessagingFeeStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "send"
  ): TypedContractMethod<
    [
      _sendParam: SendParamStruct,
      _fee: MessagingFeeStruct,
      _refundAddress: AddressLike
    ],
    [
      [MessagingReceiptStructOutput, OFTReceiptStructOutput] & {
        msgReceipt: MessagingReceiptStructOutput;
        oftReceipt: OFTReceiptStructOutput;
      }
    ],
    "payable"
  >;
  getFunction(
    nameOrSignature: "setDelegate"
  ): TypedContractMethod<[_delegate: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setEnforcedOptions"
  ): TypedContractMethod<
    [_enforcedOptions: EnforcedOptionParamStruct[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setMsgInspector"
  ): TypedContractMethod<[_msgInspector: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setPeer"
  ): TypedContractMethod<
    [_eid: BigNumberish, _peer: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setPreCrime"
  ): TypedContractMethod<[_preCrime: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "sharedDecimals"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "token"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;

  getEvent(
    key: "EnforcedOptionSet"
  ): TypedContractEvent<
    EnforcedOptionSetEvent.InputTuple,
    EnforcedOptionSetEvent.OutputTuple,
    EnforcedOptionSetEvent.OutputObject
  >;
  getEvent(
    key: "MsgInspectorSet"
  ): TypedContractEvent<
    MsgInspectorSetEvent.InputTuple,
    MsgInspectorSetEvent.OutputTuple,
    MsgInspectorSetEvent.OutputObject
  >;
  getEvent(
    key: "OFTReceived"
  ): TypedContractEvent<
    OFTReceivedEvent.InputTuple,
    OFTReceivedEvent.OutputTuple,
    OFTReceivedEvent.OutputObject
  >;
  getEvent(
    key: "OFTSent"
  ): TypedContractEvent<
    OFTSentEvent.InputTuple,
    OFTSentEvent.OutputTuple,
    OFTSentEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "PeerSet"
  ): TypedContractEvent<
    PeerSetEvent.InputTuple,
    PeerSetEvent.OutputTuple,
    PeerSetEvent.OutputObject
  >;
  getEvent(
    key: "PreCrimeSet"
  ): TypedContractEvent<
    PreCrimeSetEvent.InputTuple,
    PreCrimeSetEvent.OutputTuple,
    PreCrimeSetEvent.OutputObject
  >;

  filters: {
    "EnforcedOptionSet(tuple[])": TypedContractEvent<
      EnforcedOptionSetEvent.InputTuple,
      EnforcedOptionSetEvent.OutputTuple,
      EnforcedOptionSetEvent.OutputObject
    >;
    EnforcedOptionSet: TypedContractEvent<
      EnforcedOptionSetEvent.InputTuple,
      EnforcedOptionSetEvent.OutputTuple,
      EnforcedOptionSetEvent.OutputObject
    >;

    "MsgInspectorSet(address)": TypedContractEvent<
      MsgInspectorSetEvent.InputTuple,
      MsgInspectorSetEvent.OutputTuple,
      MsgInspectorSetEvent.OutputObject
    >;
    MsgInspectorSet: TypedContractEvent<
      MsgInspectorSetEvent.InputTuple,
      MsgInspectorSetEvent.OutputTuple,
      MsgInspectorSetEvent.OutputObject
    >;

    "OFTReceived(bytes32,uint32,address,uint256)": TypedContractEvent<
      OFTReceivedEvent.InputTuple,
      OFTReceivedEvent.OutputTuple,
      OFTReceivedEvent.OutputObject
    >;
    OFTReceived: TypedContractEvent<
      OFTReceivedEvent.InputTuple,
      OFTReceivedEvent.OutputTuple,
      OFTReceivedEvent.OutputObject
    >;

    "OFTSent(bytes32,uint32,address,uint256,uint256)": TypedContractEvent<
      OFTSentEvent.InputTuple,
      OFTSentEvent.OutputTuple,
      OFTSentEvent.OutputObject
    >;
    OFTSent: TypedContractEvent<
      OFTSentEvent.InputTuple,
      OFTSentEvent.OutputTuple,
      OFTSentEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "PeerSet(uint32,bytes32)": TypedContractEvent<
      PeerSetEvent.InputTuple,
      PeerSetEvent.OutputTuple,
      PeerSetEvent.OutputObject
    >;
    PeerSet: TypedContractEvent<
      PeerSetEvent.InputTuple,
      PeerSetEvent.OutputTuple,
      PeerSetEvent.OutputObject
    >;

    "PreCrimeSet(address)": TypedContractEvent<
      PreCrimeSetEvent.InputTuple,
      PreCrimeSetEvent.OutputTuple,
      PreCrimeSetEvent.OutputObject
    >;
    PreCrimeSet: TypedContractEvent<
      PreCrimeSetEvent.InputTuple,
      PreCrimeSetEvent.OutputTuple,
      PreCrimeSetEvent.OutputObject
    >;
  };
}
