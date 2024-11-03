import { createSchema } from "@ponder/core";

export default createSchema((p) => ({
  CollectEvent: p.createTable({
    id: p.string(),
    hearter: p.string(),
    memeToken: p.string(),
    allocation: p.bigint(),
    timestamp: p.int(),
    blockNumber: p.int(),
  }),
  HeartEvent: p.createTable({
    id: p.string(),
    hearter: p.string(),
    memeToken: p.string(),
    amount: p.bigint(),
    timestamp: p.int(),
    blockNumber: p.int(),
  }),
  OLASJourneyToAscendanceEvent: p.createTable({
    id: p.string(),
    olas: p.string(),
    amount: p.bigint(),
    timestamp: p.int(),
    blockNumber: p.int(),
  }),
  PurgeEvent: p.createTable({
    id: p.string(),
    memeToken: p.string(),
    remainingAmount: p.bigint(),
    timestamp: p.int(),
    blockNumber: p.int(),
  }),
  SummonEvent: p.createTable({
    id: p.string(),
    summoner: p.string(),
    memeToken: p.string(),
    nativeTokenContributed: p.bigint(),
    timestamp: p.int(),
    blockNumber: p.int(),
  }),
  UnleashEvent: p.createTable({
    id: p.string(),
    unleasher: p.string(),
    memeToken: p.string(),
    lpPairAddress: p.string(),
    liquidity: p.bigint(),
    burnPercentageOfStable: p.bigint(),
    timestamp: p.int(),
    blockNumber: p.int(),
  }),
  MemeToken: p.createTable({
    id: p.string(),
    owner: p.string(),
    lpPairAddress: p.string(),
    liquidity: p.bigint(),
    heartCount: p.bigint(),
    isUnleashed: p.boolean(),
    timestamp: p.int(),
    blockNumber: p.int(),
  }),
}));
