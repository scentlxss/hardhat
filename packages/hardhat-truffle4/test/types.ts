import { artifacts } from "hardhat";

type Dummy = unknown;

type IERC20Contract = Dummy;

type Equals<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
  ? 1
  : 2
  ? true
  : false;

// eslint-disable-next-line @typescript-eslint/naming-convention
type Assert<_ extends true> = void;

// assert Artifacts can be extended

declare module "hardhat/types/artifacts" {
  export interface Artifacts {
    require(name: "IERC20"): IERC20Contract;
  }
}

const ierc20Artifact = artifacts.require("IERC20");
const unknownArtifact = artifacts.require("UnknownArtifact");

export type AssertIERC20TypeIsNotAny = Assert<
  Equals<IERC20Contract, typeof ierc20Artifact>
>;
export type AssertUnknownArtifactTypeIsAny = Assert<
  Equals<any, typeof unknownArtifact>
>;
