export type TimeLockedFund = {
  version: '0.1.0'
  name: 'time_locked_fund'
  instructions: [
    {
      name: 'createFund'
      accounts: [
        {
          name: 'fund'
          isMut: true
          isSigner: false
        },
        {
          name: 'mint'
          isMut: false
          isSigner: false
        },
        {
          name: 'tokenVault'
          isMut: true
          isSigner: false
        },
        {
          name: 'tokenVaultAuthority'
          isMut: false
          isSigner: false
        },
        {
          name: 'payerTokenAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'redeemer'
          isMut: false
          isSigner: false
        },
        {
          name: 'payer'
          isMut: true
          isSigner: true
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
      ]
      args: [
        {
          name: 'seed'
          type: 'string'
        },
        {
          name: 'name'
          type: 'string'
        },
        {
          name: 'amount'
          type: 'u64'
        },
        {
          name: 'redeemTimestamp'
          type: 'u64'
        },
      ]
    },
    {
      name: 'redeem'
      accounts: [
        {
          name: 'fund'
          isMut: false
          isSigner: false
        },
        {
          name: 'mint'
          isMut: false
          isSigner: false
        },
        {
          name: 'tokenVault'
          isMut: true
          isSigner: false
        },
        {
          name: 'tokenVaultAuthority'
          isMut: false
          isSigner: false
        },
        {
          name: 'redeemerTokenAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'redeemer'
          isMut: true
          isSigner: true
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'associatedTokenProgram'
          isMut: false
          isSigner: false
        },
      ]
      args: []
    },
  ]
  accounts: [
    {
      name: 'fund'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'name'
            type: 'string'
          },
          {
            name: 'amount'
            type: 'u64'
          },
          {
            name: 'redeemTimestamp'
            type: 'u64'
          },
          {
            name: 'mint'
            type: 'publicKey'
          },
          {
            name: 'tokenVault'
            type: 'publicKey'
          },
          {
            name: 'redeemer'
            type: 'publicKey'
          },
        ]
      }
    },
  ]
  errors: [
    {
      code: 6000
      name: 'InsufficientRedeemTime'
      msg: 'Redeem time has not been reached'
    },
  ]
}

export const IDL: TimeLockedFund = {
  version: '0.1.0',
  name: 'time_locked_fund',
  instructions: [
    {
      name: 'createFund',
      accounts: [
        {
          name: 'fund',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenVaultAuthority',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'payerTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'redeemer',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'payer',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'seed',
          type: 'string',
        },
        {
          name: 'name',
          type: 'string',
        },
        {
          name: 'amount',
          type: 'u64',
        },
        {
          name: 'redeemTimestamp',
          type: 'u64',
        },
      ],
    },
    {
      name: 'redeem',
      accounts: [
        {
          name: 'fund',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'mint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenVaultAuthority',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'redeemerTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'redeemer',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
  ],
  accounts: [
    {
      name: 'fund',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'name',
            type: 'string',
          },
          {
            name: 'amount',
            type: 'u64',
          },
          {
            name: 'redeemTimestamp',
            type: 'u64',
          },
          {
            name: 'mint',
            type: 'publicKey',
          },
          {
            name: 'tokenVault',
            type: 'publicKey',
          },
          {
            name: 'redeemer',
            type: 'publicKey',
          },
        ],
      },
    },
  ],
  errors: [
    {
      code: 6000,
      name: 'InsufficientRedeemTime',
      msg: 'Redeem time has not been reached',
    },
  ],
}
