import type { OverrideBundleDefinition } from '@polkadot/types/types';

// structs need to be in order
/* eslint-disable sort-keys */

const definitions: OverrideBundleDefinition = {
  types: [
    {
      // on all versions
      minmax: [0, undefined],
      types: {

	AppAdvertiseAdded: { 
		owner: "T::AccountId", 
		id: "u64", 
		tag: "Text"
	},

        Amendment: 'Call',
        Application: {
          candidate: 'AccountId',
          candidate_deposit: 'Balance',
          challenged_block: 'BlockNumber',
          challenger: 'Option<AccountId>',
          challenger_deposit: 'Option<Balance>',
          created_block: 'BlockNumber',
          metadata: 'Vec<u8>',
          voters_against: 'Vec<(AccountId, Balance)>',
          voters_for: 'Vec<(AccountId, Balance)>',
          votes_against: 'Option<Balance>',
          votes_for: 'Option<Balance>'
        },
        CertificateId: 'AccountId',
        RootCertificate: {
          child_revocations: 'Vec<CertificateId>',
          created: 'BlockNumber',
          key: 'CertificateId',
          owner: 'AccountId',
          renewed: 'BlockNumber',
          revoked: 'bool',
          validity: 'BlockNumber'
        },
        VestingSchedule: {
          start: 'BlockNumber',
          period: 'BlockNumber',
          period_count: 'u32',
          per_period: 'Balance'
        },
        VestingScheduleOf: 'VestingSchedule'
      }
    }
  ]
};

export default { typesBundle: {spec: {"nodle-chain": definitions}}};