import { EpochEntity } from "src/staking/entities/epoch.entity";

const epochs = [
  {
    "_id": "612f7b555633c83b8a586b5e",
    "proposals": [
      "QmPXQsUwzyL12iKSVaUgBrnodtfJWno9Nfq2w1TkfJoj3y",
      "QmSPg29Rgqkx95tioYew13q5FYekiNNMMbPhZ8hTPC3ERK",
      "QmSbx636cXdGYYKXLnHHb3TGdgUJMt3Nd6TXVMDpTaXxEW",
      "QmYYo1CWXBtasWCNK1Qgb2XWno7acUzJCkdP6vEA7oNwEE"
    ],
    "participants": [
      {
        "address": "0x1a1087bf077f74fb21fd838a8a25cf9fe0818450",
        "participation": 0,
        "staker": {
          "accountDepositTokenAllowance": "0",
          "accountDepositTokenBalance": "10000000000000000000000",
          "accountLocks": [],
          "accountRewards": [],
          "accountVeTokenBalance": "0",
          "accountWithdrawableRewards": "0",
          "accountWithdrawnRewards": "0",
          "id": "0x1a1087bf077f74fb21fd838a8a25cf9fe0818450",
          "totalStaked": "1036127990898273800000000",
          "veTokenTotalSupply": "954882541904856126966970"
        },
        "votes": []
      },
      {
        "address": "0x1fdca2162eefb7ad400ed3d6627ac9c63dad55a1",
        "participation": 0,
        "staker": {
          "accountDepositTokenAllowance": "0",
          "accountDepositTokenBalance": "1000000000000000000000000",
          "accountLocks": [],
          "accountRewards": [],
          "accountVeTokenBalance": "0",
          "accountWithdrawableRewards": "0",
          "accountWithdrawnRewards": "0",
          "id": "0x1fdca2162eefb7ad400ed3d6627ac9c63dad55a1",
          "totalStaked": "1036147990898273800000000",
          "veTokenTotalSupply": "954885125238189459666970"
        },
        "votes": []
      },
      {
        "address": "0x3c341129dac2096b88945a8985f0ada799abf8c9",
        "participation": 0,
        "staker": {
          "accountDepositTokenAllowance": "115792089237316195423570985008687907853269984665640564038457584007913129639935",
          "accountDepositTokenBalance": "99000000000000000000000",
          "accountLocks": [
            {
              "amount": "1000000000000000000000",
              "boosted": false,
              "ejected": false,
              "id": "0x3c341129dac2096b88945a8985f0ada799abf8c9_0",
              "lockDuration": "360",
              "lockId": "0",
              "lockedAt": "1627391759",
              "withdrawn": false
            },
            {
              "amount": "1000000000000000000000",
              "boosted": true,
              "ejected": false,
              "id": "0x3c341129dac2096b88945a8985f0ada799abf8c9_1",
              "lockDuration": "360",
              "lockId": "1",
              "lockedAt": "1627391879",
              "withdrawn": false
            }
          ],
          "accountRewards": [
            {
              "amount": "100000000000000000000000000000000",
              "id": "0xa529241f69b90dba9e46714ad134cbaf2f57d04e25ebb164aba753fafef941c7",
              "timestamp": "1627392630",
              "type": "distributed"
            }
          ],
          "accountVeTokenBalance": "1000000000000000000000",
          "accountWithdrawableRewards": "21245161736963305023927463236464",
          "accountWithdrawnRewards": "0",
          "id": "0x3c341129dac2096b88945a8985f0ada799abf8c9",
          "totalStaked": "4979000000000000000000",
          "veTokenTotalSupply": "4706954046201278000000"
        },
        "votes": []
      },
      {
        "address": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e",
        "participation": 0,
        "staker": {
          "accountDepositTokenAllowance": "115792089237316195423570985008687907853269984665640564039446584007913129639935",
          "accountDepositTokenBalance": "957847000000000000000000",
          "accountLocks": [
            {
              "amount": "100000000000000000000",
              "boosted": false,
              "ejected": true,
              "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_0",
              "lockDuration": "2160",
              "lockId": "0",
              "lockedAt": "1626863490",
              "withdrawn": false
            },
            {
              "amount": "50000000000000000000",
              "boosted": false,
              "ejected": false,
              "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_1",
              "lockDuration": "720",
              "lockId": "1",
              "lockedAt": "1626866790",
              "withdrawn": false
            },
            {
              "amount": "10000000000000000000",
              "boosted": true,
              "ejected": false,
              "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_10",
              "lockDuration": "2160",
              "lockId": "10",
              "lockedAt": "1627392720",
              "withdrawn": true
            },
            {
              "amount": "1234000000000000000000",
              "boosted": false,
              "ejected": false,
              "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_11",
              "lockDuration": "1440",
              "lockId": "11",
              "lockedAt": "1627574451",
              "withdrawn": true
            },
            {
              "amount": "111000000000000000000",
              "boosted": false,
              "ejected": false,
              "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_12",
              "lockDuration": "2160",
              "lockId": "12",
              "lockedAt": "1629469230",
              "withdrawn": true
            },
            {
              "amount": "222000000000000000000",
              "boosted": false,
              "ejected": false,
              "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_13",
              "lockDuration": "2160",
              "lockId": "13",
              "lockedAt": "1629470310",
              "withdrawn": true
            },
            {
              "amount": "4321000000000000000000",
              "boosted": false,
              "ejected": false,
              "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_14",
              "lockDuration": "2160",
              "lockId": "14",
              "lockedAt": "1629704798",
              "withdrawn": false
            },
            {
              "amount": "333000000000000000000",
              "boosted": false,
              "ejected": false,
              "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_15",
              "lockDuration": "2160",
              "lockId": "15",
              "lockedAt": "1629712966",
              "withdrawn": true
            },
            {
              "amount": "222000000000000000000",
              "boosted": false,
              "ejected": false,
              "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_16",
              "lockDuration": "2160",
              "lockId": "16",
              "lockedAt": "1629713162",
              "withdrawn": true
            },
            {
              "amount": "4321000000000000000000",
              "boosted": true,
              "ejected": false,
              "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_17",
              "lockDuration": "2160",
              "lockId": "17",
              "lockedAt": "1629733429",
              "withdrawn": true
            },
            {
              "amount": "123000000000000000000",
              "boosted": false,
              "ejected": false,
              "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_18",
              "lockDuration": "720",
              "lockId": "18",
              "lockedAt": "1629798670",
              "withdrawn": false
            },
            {
              "amount": "123000000000000000000",
              "boosted": true,
              "ejected": false,
              "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_19",
              "lockDuration": "720",
              "lockId": "19",
              "lockedAt": "1629798805",
              "withdrawn": true
            },
            {
              "amount": "10000000000000000000",
              "boosted": false,
              "ejected": false,
              "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_2",
              "lockDuration": "360",
              "lockId": "2",
              "lockedAt": "1626866835",
              "withdrawn": true
            },
            {
              "amount": "456000000000000000000",
              "boosted": false,
              "ejected": false,
              "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_20",
              "lockDuration": "1440",
              "lockId": "20",
              "lockedAt": "1629807606",
              "withdrawn": false
            },
            {
              "amount": "456000000000000000000",
              "boosted": true,
              "ejected": false,
              "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_21",
              "lockDuration": "1440",
              "lockId": "21",
              "lockedAt": "1629807982",
              "withdrawn": false
            },
            {
              "amount": "111000000000000000000",
              "boosted": false,
              "ejected": false,
              "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_22",
              "lockDuration": "720",
              "lockId": "22",
              "lockedAt": "1629808132",
              "withdrawn": false
            },
            {
              "amount": "111000000000000000000",
              "boosted": true,
              "ejected": false,
              "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_23",
              "lockDuration": "720",
              "lockId": "23",
              "lockedAt": "1629808252",
              "withdrawn": false
            },
            {
              "amount": "777000000000000000000",
              "boosted": false,
              "ejected": false,
              "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_24",
              "lockDuration": "720",
              "lockId": "24",
              "lockedAt": "1629808327",
              "withdrawn": false
            },
            {
              "amount": "777000000000000000000",
              "boosted": true,
              "ejected": false,
              "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_25",
              "lockDuration": "720",
              "lockId": "25",
              "lockedAt": "1629808432",
              "withdrawn": false
            },
            {
              "amount": "666000000000000000000",
              "boosted": false,
              "ejected": false,
              "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_26",
              "lockDuration": "360",
              "lockId": "26",
              "lockedAt": "1629809737",
              "withdrawn": false
            },
            {
              "amount": "666000000000000000000",
              "boosted": true,
              "ejected": false,
              "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_27",
              "lockDuration": "360",
              "lockId": "27",
              "lockedAt": "1629809857",
              "withdrawn": false
            },
            {
              "amount": "444000000000000000000",
              "boosted": false,
              "ejected": false,
              "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_28",
              "lockDuration": "840",
              "lockId": "28",
              "lockedAt": "1629809932",
              "withdrawn": false
            },
            {
              "amount": "444000000000000000000",
              "boosted": true,
              "ejected": false,
              "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_29",
              "lockDuration": "840",
              "lockId": "29",
              "lockedAt": "1629809977",
              "withdrawn": false
            },
            {
              "amount": "50000000000000000000",
              "boosted": true,
              "ejected": false,
              "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_3",
              "lockDuration": "720",
              "lockId": "3",
              "lockedAt": "1626873180",
              "withdrawn": true
            },
            {
              "amount": "333000000000000000000",
              "boosted": false,
              "ejected": false,
              "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_30",
              "lockDuration": "720",
              "lockId": "30",
              "lockedAt": "1629810022",
              "withdrawn": false
            },
            {
              "amount": "333000000000000000000",
              "boosted": true,
              "ejected": false,
              "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_31",
              "lockDuration": "720",
              "lockId": "31",
              "lockedAt": "1629810082",
              "withdrawn": false
            },
            {
              "amount": "111000000000000000000",
              "boosted": false,
              "ejected": false,
              "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_32",
              "lockDuration": "720",
              "lockId": "32",
              "lockedAt": "1629810172",
              "withdrawn": false
            },
            {
              "amount": "111000000000000000000",
              "boosted": true,
              "ejected": false,
              "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_33",
              "lockDuration": "720",
              "lockId": "33",
              "lockedAt": "1629810232",
              "withdrawn": false
            },
            {
              "amount": "88000000000000000000",
              "boosted": false,
              "ejected": false,
              "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_34",
              "lockDuration": "720",
              "lockId": "34",
              "lockedAt": "1629811253",
              "withdrawn": false
            },
            {
              "amount": "77000000000000000000",
              "boosted": false,
              "ejected": false,
              "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_35",
              "lockDuration": "720",
              "lockId": "35",
              "lockedAt": "1629811388",
              "withdrawn": false
            },
            {
              "amount": "66000000000000000000",
              "boosted": false,
              "ejected": false,
              "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_36",
              "lockDuration": "720",
              "lockId": "36",
              "lockedAt": "1629811493",
              "withdrawn": false
            },
            {
              "amount": "55000000000000000000",
              "boosted": false,
              "ejected": false,
              "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_37",
              "lockDuration": "780",
              "lockId": "37",
              "lockedAt": "1629811658",
              "withdrawn": false
            },
            {
              "amount": "22000000000000000000",
              "boosted": false,
              "ejected": false,
              "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_38",
              "lockDuration": "1320",
              "lockId": "38",
              "lockedAt": "1629811868",
              "withdrawn": false
            },
            {
              "amount": "11000000000000000000",
              "boosted": false,
              "ejected": false,
              "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_39",
              "lockDuration": "660",
              "lockId": "39",
              "lockedAt": "1629812063",
              "withdrawn": false
            },
            {
              "amount": "10000000000000000000",
              "boosted": false,
              "ejected": false,
              "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_4",
              "lockDuration": "2160",
              "lockId": "4",
              "lockedAt": "1627307435",
              "withdrawn": false
            },
            {
              "amount": "55000000000000000000",
              "boosted": false,
              "ejected": false,
              "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_40",
              "lockDuration": "540",
              "lockId": "40",
              "lockedAt": "1629812288",
              "withdrawn": false
            },
            {
              "amount": "11000000000000000000",
              "boosted": false,
              "ejected": false,
              "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_41",
              "lockDuration": "660",
              "lockId": "41",
              "lockedAt": "1629887874",
              "withdrawn": false
            },
            {
              "amount": "1234000000000000000000",
              "boosted": false,
              "ejected": false,
              "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_5",
              "lockDuration": "2160",
              "lockId": "5",
              "lockedAt": "1627307495",
              "withdrawn": true
            },
            {
              "amount": "222000000000000000000",
              "boosted": false,
              "ejected": false,
              "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_6",
              "lockDuration": "2160",
              "lockId": "6",
              "lockedAt": "1627307585",
              "withdrawn": true
            },
            {
              "amount": "555000000000000000000",
              "boosted": false,
              "ejected": false,
              "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_7",
              "lockDuration": "2160",
              "lockId": "7",
              "lockedAt": "1627307750",
              "withdrawn": true
            },
            {
              "amount": "555000000000000000000",
              "boosted": false,
              "ejected": false,
              "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_8",
              "lockDuration": "2160",
              "lockId": "8",
              "lockedAt": "1627307780",
              "withdrawn": true
            },
            {
              "amount": "333000000000000000000",
              "boosted": false,
              "ejected": false,
              "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_9",
              "lockDuration": "2160",
              "lockId": "9",
              "lockedAt": "1627307826",
              "withdrawn": true
            }
          ],
          "accountRewards": [
            {
              "amount": "62882137889106424730239482838677",
              "id": "0x27fb2f54d294193e1fee5cbe07d74ba049a30325a094defbebcec165e64dd4cc",
              "timestamp": "1629887619",
              "type": "claimed"
            },
            {
              "amount": "64513068469411652",
              "id": "0xaf8593da935990386bb6ee0656b04e0732b0c136c59a0a7d418c6d205ac6c860",
              "timestamp": "1627035830",
              "type": "claimed"
            },
            {
              "amount": "1000000000000000000",
              "id": "0xf7bdb68d7b2ef04263c43b06d3934959caa8ccdf0e47fc39d9ff66a6b7fd6386",
              "timestamp": "1627034105",
              "type": "distributed"
            }
          ],
          "accountVeTokenBalance": "2990135393520816800000",
          "accountWithdrawableRewards": "0",
          "accountWithdrawnRewards": "62882137889106489243307952250329",
          "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e",
          "totalStaked": "1036127990898273800000000",
          "veTokenTotalSupply": "954882541904856126966970"
        },
        "votes": []
      },
      {
        "address": "0x441658de8ebcb25d8d320bd5c1abb314b0ce195e",
        "participation": 0,
        "staker": {
          "accountDepositTokenAllowance": "0",
          "accountDepositTokenBalance": "1036147990898273800000000",
          "accountLocks": [],
          "accountRewards": [],
          "accountVeTokenBalance": "0",
          "accountWithdrawableRewards": "0",
          "accountWithdrawnRewards": "0",
          "id": "0x441658de8ebcb25d8d320bd5c1abb314b0ce195e",
          "totalStaked": "1036147990898273800000000",
          "veTokenTotalSupply": "954885125238189459666970"
        },
        "votes": []
      },
      {
        "address": "0x7884c447d5cd98e794c1a5c08e3107fbf29b2877",
        "participation": 0,
        "staker": {
          "accountDepositTokenAllowance": "0",
          "accountDepositTokenBalance": "10000000000000000000000",
          "accountLocks": [],
          "accountRewards": [],
          "accountVeTokenBalance": "0",
          "accountWithdrawableRewards": "0",
          "accountWithdrawnRewards": "0",
          "id": "0x7884c447d5cd98e794c1a5c08e3107fbf29b2877",
          "totalStaked": "1005207000000000000000000",
          "veTokenTotalSupply": "935196208984897241000000"
        },
        "votes": []
      },
      {
        "address": "0xabf26352aadaaa1cabffb3a55e378bac6bf15791",
        "participation": 1,
        "staker": {
          "accountDepositTokenAllowance": "115792089237316195423570985008687907853269984665640564038457584007913129639935",
          "accountDepositTokenBalance": "0",
          "accountLocks": [
            {
              "amount": "10000000000000000000",
              "boosted": false,
              "ejected": false,
              "id": "0xabf26352aadaaa1cabffb3a55e378bac6bf15791_0",
              "lockDuration": "2160",
              "lockId": "0",
              "lockedAt": "1626867345",
              "withdrawn": false
            },
            {
              "amount": "50000000000000000000",
              "boosted": false,
              "ejected": false,
              "id": "0xabf26352aadaaa1cabffb3a55e378bac6bf15791_1",
              "lockDuration": "1920",
              "lockId": "1",
              "lockedAt": "1626867390",
              "withdrawn": false
            },
            {
              "amount": "100000000000000000000",
              "boosted": false,
              "ejected": false,
              "id": "0xabf26352aadaaa1cabffb3a55e378bac6bf15791_2",
              "lockDuration": "1440",
              "lockId": "2",
              "lockedAt": "1626867390",
              "withdrawn": false
            },
            {
              "amount": "300000000000000000000",
              "boosted": false,
              "ejected": false,
              "id": "0xabf26352aadaaa1cabffb3a55e378bac6bf15791_3",
              "lockDuration": "2160",
              "lockId": "3",
              "lockedAt": "1626867405",
              "withdrawn": false
            },
            {
              "amount": "150000000000000000000",
              "boosted": false,
              "ejected": false,
              "id": "0xabf26352aadaaa1cabffb3a55e378bac6bf15791_4",
              "lockDuration": "720",
              "lockId": "4",
              "lockedAt": "1626867420",
              "withdrawn": false
            },
            {
              "amount": "50000000000000000000",
              "boosted": false,
              "ejected": false,
              "id": "0xabf26352aadaaa1cabffb3a55e378bac6bf15791_5",
              "lockDuration": "360",
              "lockId": "5",
              "lockedAt": "1626867435",
              "withdrawn": false
            },
            {
              "amount": "50000000000000000000",
              "boosted": false,
              "ejected": false,
              "id": "0xabf26352aadaaa1cabffb3a55e378bac6bf15791_6",
              "lockDuration": "480",
              "lockId": "6",
              "lockedAt": "1626867450",
              "withdrawn": false
            },
            {
              "amount": "290000000000000000000",
              "boosted": false,
              "ejected": false,
              "id": "0xabf26352aadaaa1cabffb3a55e378bac6bf15791_7",
              "lockDuration": "2100",
              "lockId": "7",
              "lockedAt": "1626867495",
              "withdrawn": false
            }
          ],
          "accountRewards": [],
          "accountVeTokenBalance": "737120712867945000000",
          "accountWithdrawableRewards": "15660248766534596356745799469793",
          "accountWithdrawnRewards": "0",
          "id": "0xabf26352aadaaa1cabffb3a55e378bac6bf15791",
          "totalStaked": "4979000000000000000000",
          "veTokenTotalSupply": "4706954046201278000000"
        },
        "votes": [
          {
            "id": "QmaRNJzwc9tZikwaZFzrJ3nFFQuoSUkjVU3KdpKMwKe6p3",
            "voter": "0xaBf26352aAdAAa1CabFfB3a55e378bac6BF15791",
            "created": 1630059577,
            "proposal": {
              "id": "QmYYo1CWXBtasWCNK1Qgb2XWno7acUzJCkdP6vEA7oNwEE"
            },
            "choice": 1,
            "space": {
              "id": "piedao"
            }
          },
          {
            "id": "QmcUSGo39zmFwKhbjsSCDyeBMxNkUbJL4SLfKLZmjLut6Q",
            "voter": "0xaBf26352aAdAAa1CabFfB3a55e378bac6BF15791",
            "created": 1629677451,
            "proposal": {
              "id": "QmSbx636cXdGYYKXLnHHb3TGdgUJMt3Nd6TXVMDpTaXxEW"
            },
            "choice": 1,
            "space": {
              "id": "piedao"
            }
          },
          {
            "id": "QmXJpAh8R6MUT3twvShxh8UsQ8cfFAWA1ihMyfbzVZz6ve",
            "voter": "0xaBf26352aAdAAa1CabFfB3a55e378bac6BF15791",
            "created": 1628127702,
            "proposal": {
              "id": "QmPXQsUwzyL12iKSVaUgBrnodtfJWno9Nfq2w1TkfJoj3y"
            },
            "choice": 1,
            "space": {
              "id": "piedao"
            }
          }
        ]
      },
      {
        "address": "0xc96265c36f6d77747f9c259946a1ef55fce946b7",
        "participation": 1,
        "staker": {
          "accountDepositTokenAllowance": "0",
          "accountDepositTokenBalance": "6943687009101726200000000",
          "accountLocks": [
            {
              "amount": "10000000000000000000000",
              "boosted": false,
              "ejected": false,
              "id": "0xc96265c36f6d77747f9c259946a1ef55fce946b7_0",
              "lockDuration": "2160",
              "lockId": "0",
              "lockedAt": "1629195356",
              "withdrawn": false
            },
            {
              "amount": "3569000000000000000000",
              "boosted": false,
              "ejected": false,
              "id": "0xc96265c36f6d77747f9c259946a1ef55fce946b7_1",
              "lockDuration": "1020",
              "lockId": "1",
              "lockedAt": "1629206430",
              "withdrawn": false
            },
            {
              "amount": "772990898273800000000",
              "boosted": false,
              "ejected": false,
              "id": "0xc96265c36f6d77747f9c259946a1ef55fce946b7_2",
              "lockDuration": "360",
              "lockId": "2",
              "lockedAt": "1629207992",
              "withdrawn": false
            },
            {
              "amount": "543000000000000000000",
              "boosted": false,
              "ejected": false,
              "id": "0xc96265c36f6d77747f9c259946a1ef55fce946b7_3",
              "lockDuration": "2160",
              "lockId": "3",
              "lockedAt": "1629280843",
              "withdrawn": false
            },
            {
              "amount": "4000000000000000000000",
              "boosted": false,
              "ejected": false,
              "id": "0xc96265c36f6d77747f9c259946a1ef55fce946b7_4",
              "lockDuration": "2160",
              "lockId": "4",
              "lockedAt": "1629280888",
              "withdrawn": false
            },
            {
              "amount": "1000000000000000000000",
              "boosted": false,
              "ejected": false,
              "id": "0xc96265c36f6d77747f9c259946a1ef55fce946b7_5",
              "lockDuration": "2160",
              "lockId": "5",
              "lockedAt": "1629712276",
              "withdrawn": false
            },
            {
              "amount": "7299000000000000000000",
              "boosted": false,
              "ejected": false,
              "id": "0xc96265c36f6d77747f9c259946a1ef55fce946b7_6",
              "lockDuration": "360",
              "lockId": "6",
              "lockedAt": "1629883816",
              "withdrawn": false
            },
            {
              "amount": "1240000000000000000000",
              "boosted": false,
              "ejected": false,
              "id": "0xc96265c36f6d77747f9c259946a1ef55fce946b7_7",
              "lockDuration": "540",
              "lockId": "7",
              "lockedAt": "1629884719",
              "withdrawn": false
            },
            {
              "amount": "333000000000000000000",
              "boosted": false,
              "ejected": false,
              "id": "0xc96265c36f6d77747f9c259946a1ef55fce946b7_8",
              "lockDuration": "720",
              "lockId": "8",
              "lockedAt": "1629885005",
              "withdrawn": false
            },
            {
              "amount": "556000000000000000000",
              "boosted": false,
              "ejected": false,
              "id": "0xc96265c36f6d77747f9c259946a1ef55fce946b7_9",
              "lockDuration": "2160",
              "lockId": "9",
              "lockedAt": "1629885381",
              "withdrawn": false
            }
          ],
          "accountRewards": [],
          "accountVeTokenBalance": "18371197526438069166970",
          "accountWithdrawableRewards": "0",
          "accountWithdrawnRewards": "0",
          "id": "0xc96265c36f6d77747f9c259946a1ef55fce946b7",
          "totalStaked": "1036116990898273800000000",
          "veTokenTotalSupply": "954880292832761601666970"
        },
        "votes": [
          {
            "id": "QmYLhEBg81eVTD7h7WnBrn8x3XCVe35nrswNWruesT6MJ4",
            "voter": "0xc96265c36F6D77747f9c259946a1eF55FcE946b7",
            "created": 1629536871,
            "proposal": {
              "id": "QmSbx636cXdGYYKXLnHHb3TGdgUJMt3Nd6TXVMDpTaXxEW"
            },
            "choice": 1,
            "space": {
              "id": "piedao"
            }
          },
          {
            "id": "QmUmMZW44iwPQwKkodfsixX1ftV4NPWzk3zYHhmjcdkWuq",
            "voter": "0xc96265c36F6D77747f9c259946a1eF55FcE946b7",
            "created": 1628690656,
            "proposal": {
              "id": "QmSPg29Rgqkx95tioYew13q5FYekiNNMMbPhZ8hTPC3ERK"
            },
            "choice": 1,
            "space": {
              "id": "piedao"
            }
          }
        ]
      },
      {
        "address": "0xd18a54f89603fe4301b29ef6a8ab11b9ba24f139",
        "participation": 0,
        "staker": {
          "accountDepositTokenAllowance": "115792089237316195423570985008687907853269984665640563036900584007913129639935",
          "accountDepositTokenBalance": "109071000000000000000000",
          "accountLocks": [
            {
              "amount": "5000000000000000000",
              "boosted": false,
              "ejected": false,
              "id": "0xd18a54f89603fe4301b29ef6a8ab11b9ba24f139_0",
              "lockDuration": "360",
              "lockId": "0",
              "lockedAt": "1627306400",
              "withdrawn": false
            },
            {
              "amount": "1000000000000000000",
              "boosted": false,
              "ejected": false,
              "id": "0xd18a54f89603fe4301b29ef6a8ab11b9ba24f139_1",
              "lockDuration": "2160",
              "lockId": "1",
              "lockedAt": "1627306580",
              "withdrawn": false
            },
            {
              "amount": "10000000000000000000",
              "boosted": false,
              "ejected": false,
              "id": "0xd18a54f89603fe4301b29ef6a8ab11b9ba24f139_10",
              "lockDuration": "2160",
              "lockId": "10",
              "lockedAt": "1627635968",
              "withdrawn": false
            },
            {
              "amount": "10000000000000000000",
              "boosted": false,
              "ejected": false,
              "id": "0xd18a54f89603fe4301b29ef6a8ab11b9ba24f139_11",
              "lockDuration": "2160",
              "lockId": "11",
              "lockedAt": "1627636133",
              "withdrawn": false
            },
            {
              "amount": "10000000000000000000",
              "boosted": false,
              "ejected": false,
              "id": "0xd18a54f89603fe4301b29ef6a8ab11b9ba24f139_12",
              "lockDuration": "2160",
              "lockId": "12",
              "lockedAt": "1627639871",
              "withdrawn": false
            },
            {
              "amount": "56000000000000000000",
              "boosted": false,
              "ejected": false,
              "id": "0xd18a54f89603fe4301b29ef6a8ab11b9ba24f139_13",
              "lockDuration": "2160",
              "lockId": "13",
              "lockedAt": "1627639901",
              "withdrawn": false
            },
            {
              "amount": "1000000000000000000000",
              "boosted": false,
              "ejected": false,
              "id": "0xd18a54f89603fe4301b29ef6a8ab11b9ba24f139_14",
              "lockDuration": "2160",
              "lockId": "14",
              "lockedAt": "1627640096",
              "withdrawn": true
            },
            {
              "amount": "12345000000000000000000",
              "boosted": false,
              "ejected": false,
              "id": "0xd18a54f89603fe4301b29ef6a8ab11b9ba24f139_15",
              "lockDuration": "2160",
              "lockId": "15",
              "lockedAt": "1627643835",
              "withdrawn": false
            },
            {
              "amount": "987000000000000000000",
              "boosted": false,
              "ejected": false,
              "id": "0xd18a54f89603fe4301b29ef6a8ab11b9ba24f139_16",
              "lockDuration": "2160",
              "lockId": "16",
              "lockedAt": "1627644001",
              "withdrawn": false
            },
            {
              "amount": "456000000000000000000",
              "boosted": false,
              "ejected": false,
              "id": "0xd18a54f89603fe4301b29ef6a8ab11b9ba24f139_17",
              "lockDuration": "2160",
              "lockId": "17",
              "lockedAt": "1627644046",
              "withdrawn": false
            },
            {
              "amount": "987654000000000000000000",
              "boosted": false,
              "ejected": false,
              "id": "0xd18a54f89603fe4301b29ef6a8ab11b9ba24f139_18",
              "lockDuration": "2040",
              "lockId": "18",
              "lockedAt": "1627910464",
              "withdrawn": false
            },
            {
              "amount": "1000000000000000000",
              "boosted": false,
              "ejected": false,
              "id": "0xd18a54f89603fe4301b29ef6a8ab11b9ba24f139_19",
              "lockDuration": "2160",
              "lockId": "19",
              "lockedAt": "1629963996",
              "withdrawn": false
            },
            {
              "amount": "1000000000000000000",
              "boosted": false,
              "ejected": false,
              "id": "0xd18a54f89603fe4301b29ef6a8ab11b9ba24f139_2",
              "lockDuration": "420",
              "lockId": "2",
              "lockedAt": "1627307600",
              "withdrawn": false
            },
            {
              "amount": "19000000000000000000",
              "boosted": false,
              "ejected": false,
              "id": "0xd18a54f89603fe4301b29ef6a8ab11b9ba24f139_20",
              "lockDuration": "360",
              "lockId": "20",
              "lockedAt": "1629964056",
              "withdrawn": false
            },
            {
              "amount": "1000000000000000000",
              "boosted": false,
              "ejected": false,
              "id": "0xd18a54f89603fe4301b29ef6a8ab11b9ba24f139_3",
              "lockDuration": "480",
              "lockId": "3",
              "lockedAt": "1627307961",
              "withdrawn": false
            },
            {
              "amount": "1000000000000000000",
              "boosted": false,
              "ejected": false,
              "id": "0xd18a54f89603fe4301b29ef6a8ab11b9ba24f139_4",
              "lockDuration": "540",
              "lockId": "4",
              "lockedAt": "1627308051",
              "withdrawn": false
            },
            {
              "amount": "1000000000000000000",
              "boosted": true,
              "ejected": false,
              "id": "0xd18a54f89603fe4301b29ef6a8ab11b9ba24f139_5",
              "lockDuration": "480",
              "lockId": "5",
              "lockedAt": "1627308231",
              "withdrawn": true
            },
            {
              "amount": "5000000000000000000",
              "boosted": true,
              "ejected": false,
              "id": "0xd18a54f89603fe4301b29ef6a8ab11b9ba24f139_6",
              "lockDuration": "360",
              "lockId": "6",
              "lockedAt": "1627308336",
              "withdrawn": true
            },
            {
              "amount": "1000000000000000000",
              "boosted": true,
              "ejected": false,
              "id": "0xd18a54f89603fe4301b29ef6a8ab11b9ba24f139_7",
              "lockDuration": "540",
              "lockId": "7",
              "lockedAt": "1627308381",
              "withdrawn": false
            },
            {
              "amount": "1000000000000000000",
              "boosted": true,
              "ejected": false,
              "id": "0xd18a54f89603fe4301b29ef6a8ab11b9ba24f139_8",
              "lockDuration": "2160",
              "lockId": "8",
              "lockedAt": "1627308411",
              "withdrawn": false
            },
            {
              "amount": "1000000000000000000",
              "boosted": true,
              "ejected": false,
              "id": "0xd18a54f89603fe4301b29ef6a8ab11b9ba24f139_9",
              "lockDuration": "420",
              "lockId": "9",
              "lockedAt": "1627308651",
              "withdrawn": false
            }
          ],
          "accountRewards": [
            {
              "amount": "24278693201559378942",
              "id": "0x54861b9e9906bb42f68d03315e8d7c8d58a8271cc3e978bbc01ae0db358f5675",
              "timestamp": "1627311945",
              "type": "claimed"
            },
            {
              "amount": "10000",
              "id": "0x89b9526339574188b82a942ecc20d7bab272a88d0f7a34c5c95cb32907a1ed41",
              "timestamp": "1627310693",
              "type": "distributed"
            },
            {
              "amount": "10000000000000000000000",
              "id": "0xb4341eb41e3c70194085525d647048c5a99749e7fc27909c7a63494c343eab16",
              "timestamp": "1627310844",
              "type": "distributed"
            },
            {
              "amount": "191206455632669745215347169128",
              "id": "0xf64432e49e17158084c8e9b6d284db3a0c829fa0c54d3911e2a19d85a1ba97d8",
              "timestamp": "1627392885",
              "type": "claimed"
            }
          ],
          "accountVeTokenBalance": "931785671605362628700000",
          "accountWithdrawableRewards": "0",
          "accountWithdrawnRewards": "191206455656948438416906548070",
          "id": "0xd18a54f89603fe4301b29ef6a8ab11b9ba24f139",
          "totalStaked": "1036147990898273800000000",
          "veTokenTotalSupply": "954885125238189459666970"
        },
        "votes": []
      },
      {
        "address": "0xe0bdc50a72b46d51c5572fb878f62314667778bb",
        "participation": 0,
        "staker": {
          "accountDepositTokenAllowance": "115792089237316195423570985008687907853269984665640564039456584007913129639935",
          "accountDepositTokenBalance": "9999999999000000000000000000",
          "accountLocks": [
            {
              "amount": "1000000000000000000",
              "boosted": false,
              "ejected": false,
              "id": "0xe0bdc50a72b46d51c5572fb878f62314667778bb_0",
              "lockDuration": "2160",
              "lockId": "0",
              "lockedAt": "1627309748",
              "withdrawn": false
            }
          ],
          "accountRewards": [],
          "accountVeTokenBalance": "1000000000000000000",
          "accountWithdrawableRewards": "21245161739660937601878505341",
          "accountWithdrawnRewards": "0",
          "id": "0xe0bdc50a72b46d51c5572fb878f62314667778bb",
          "totalStaked": "4979000000000000000000",
          "veTokenTotalSupply": "4706954046201278000000"
        },
        "votes": []
      }
    ],
    "startDate": 1627823293212,
    "endDate": 1630501693212,
    "startBlock": 12939786,
    "endBlock": 13139983,
    "merkleTree": {
      "elements": [
        "0x30fa2548da7765171a31929b719b6eaa41ee82302e721bea779be4a377be3a2a",
        "0x5bb4976c8976653c37f1b60d85707a27390fa243a83148cf7f70fb5b7e3fd48e",
        "0x63aa17553ed27b5535759d550ebe046268ca2579bce2cebd85ad3adf9f01270b",
        "0x8fb5631245b6d0aa2eb8dad8b6ec2c766cc227e22c1691cc5a09b77c9146e028",
        "0x95707c19e80ff95eacfe466b7193c590288d8a7e598cfb20eac4771229046516",
        "0x96cacbfd1c62bbb30092901328c816991f38fdfd46bc6c9543c37e4ac5d662f3",
        "0x9d1165196932daa7779a0a3d5a0aea21400d58ba34ccec30a3a2117140111a25",
        "0xb5170bac6827ca2b82934888d528533829568933fddbc3f02b0345b9378839ab",
        "0xf473f2a6acb3cd16b6bf5643eb4277aa174029f95ccfa0b623d084e32b0b3083",
        "0xf6a10d9b9339d775308947c539173b11cf25368931eb8e4139a90f9c0fddf471"
      ],
      "layers": [
        [
          "0x30fa2548da7765171a31929b719b6eaa41ee82302e721bea779be4a377be3a2a",
          "0x5bb4976c8976653c37f1b60d85707a27390fa243a83148cf7f70fb5b7e3fd48e",
          "0x63aa17553ed27b5535759d550ebe046268ca2579bce2cebd85ad3adf9f01270b",
          "0x8fb5631245b6d0aa2eb8dad8b6ec2c766cc227e22c1691cc5a09b77c9146e028",
          "0x95707c19e80ff95eacfe466b7193c590288d8a7e598cfb20eac4771229046516",
          "0x96cacbfd1c62bbb30092901328c816991f38fdfd46bc6c9543c37e4ac5d662f3",
          "0x9d1165196932daa7779a0a3d5a0aea21400d58ba34ccec30a3a2117140111a25",
          "0xb5170bac6827ca2b82934888d528533829568933fddbc3f02b0345b9378839ab",
          "0xf473f2a6acb3cd16b6bf5643eb4277aa174029f95ccfa0b623d084e32b0b3083",
          "0xf6a10d9b9339d775308947c539173b11cf25368931eb8e4139a90f9c0fddf471"
        ],
        [
          "0x9d4b2fa24366c412bfc7ddd328c87ad2c8e987c56dd74894ea9fc309a0687659",
          "0x3772d5a32883bb57041bc381ee90a2ddffc624cb9b06f432eea82c763fdedaa1",
          "0x20e6193165592ff8c65cf4fc4130e1444d204df6f27a63745db7b7a73af34981",
          "0x3fd2424b8fb973bf831d842a09cf043e12f92215888e6cb97f4e0a82d57c0622",
          "0xd299d733cb1c4b88d878507a85dc3bd48268ef285c74969ca7c1cde5b42a5a71"
        ],
        [
          "0xa4933e7d3ec14b4d84f60ef7b606cc00f6e93b59d8093afe6ce3f5f5218be91c",
          "0xa368395d8447cd911e688c6602037f73a9508b2e872ba93b51d44d9e32d9302f",
          "0xd299d733cb1c4b88d878507a85dc3bd48268ef285c74969ca7c1cde5b42a5a71"
        ],
        [
          "0x6efbfc38cf838bc672d3329ff407d4f487f4b716be45f9f60e894fcdb4b03bcc",
          "0xd299d733cb1c4b88d878507a85dc3bd48268ef285c74969ca7c1cde5b42a5a71"
        ],
        [
          "0xd5c54bec0ab260e3750cea5fb5722f8d43f88fa93ec41438bf75bd87575f6c14"
        ]
      ],
      "leafs": [
        {
          "address": "0x1a1087bf077f74fb21fd838a8a25cf9fe0818450",
          "participation": 0,
          "staker": {
            "accountDepositTokenAllowance": "0",
            "accountDepositTokenBalance": "10000000000000000000000",
            "accountLocks": [],
            "accountRewards": [],
            "accountVeTokenBalance": "0",
            "accountWithdrawableRewards": "0",
            "accountWithdrawnRewards": "0",
            "id": "0x1a1087bf077f74fb21fd838a8a25cf9fe0818450",
            "totalStaked": "1036127990898273800000000",
            "veTokenTotalSupply": "954882541904856126966970"
          },
          "votes": [],
          "leaf": "0xf473f2a6acb3cd16b6bf5643eb4277aa174029f95ccfa0b623d084e32b0b3083"
        },
        {
          "address": "0x1fdca2162eefb7ad400ed3d6627ac9c63dad55a1",
          "participation": 0,
          "staker": {
            "accountDepositTokenAllowance": "0",
            "accountDepositTokenBalance": "1000000000000000000000000",
            "accountLocks": [],
            "accountRewards": [],
            "accountVeTokenBalance": "0",
            "accountWithdrawableRewards": "0",
            "accountWithdrawnRewards": "0",
            "id": "0x1fdca2162eefb7ad400ed3d6627ac9c63dad55a1",
            "totalStaked": "1036147990898273800000000",
            "veTokenTotalSupply": "954885125238189459666970"
          },
          "votes": [],
          "leaf": "0x5bb4976c8976653c37f1b60d85707a27390fa243a83148cf7f70fb5b7e3fd48e"
        },
        {
          "address": "0x3c341129dac2096b88945a8985f0ada799abf8c9",
          "participation": 0,
          "staker": {
            "accountDepositTokenAllowance": "115792089237316195423570985008687907853269984665640564038457584007913129639935",
            "accountDepositTokenBalance": "99000000000000000000000",
            "accountLocks": [
              {
                "amount": "1000000000000000000000",
                "boosted": false,
                "ejected": false,
                "id": "0x3c341129dac2096b88945a8985f0ada799abf8c9_0",
                "lockDuration": "360",
                "lockId": "0",
                "lockedAt": "1627391759",
                "withdrawn": false
              },
              {
                "amount": "1000000000000000000000",
                "boosted": true,
                "ejected": false,
                "id": "0x3c341129dac2096b88945a8985f0ada799abf8c9_1",
                "lockDuration": "360",
                "lockId": "1",
                "lockedAt": "1627391879",
                "withdrawn": false
              }
            ],
            "accountRewards": [
              {
                "amount": "100000000000000000000000000000000",
                "id": "0xa529241f69b90dba9e46714ad134cbaf2f57d04e25ebb164aba753fafef941c7",
                "timestamp": "1627392630",
                "type": "distributed"
              }
            ],
            "accountVeTokenBalance": "1000000000000000000000",
            "accountWithdrawableRewards": "21245161736963305023927463236464",
            "accountWithdrawnRewards": "0",
            "id": "0x3c341129dac2096b88945a8985f0ada799abf8c9",
            "totalStaked": "4979000000000000000000",
            "veTokenTotalSupply": "4706954046201278000000"
          },
          "votes": [],
          "leaf": "0xb5170bac6827ca2b82934888d528533829568933fddbc3f02b0345b9378839ab"
        },
        {
          "address": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e",
          "participation": 0,
          "staker": {
            "accountDepositTokenAllowance": "115792089237316195423570985008687907853269984665640564039446584007913129639935",
            "accountDepositTokenBalance": "957847000000000000000000",
            "accountLocks": [
              {
                "amount": "100000000000000000000",
                "boosted": false,
                "ejected": true,
                "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_0",
                "lockDuration": "2160",
                "lockId": "0",
                "lockedAt": "1626863490",
                "withdrawn": false
              },
              {
                "amount": "50000000000000000000",
                "boosted": false,
                "ejected": false,
                "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_1",
                "lockDuration": "720",
                "lockId": "1",
                "lockedAt": "1626866790",
                "withdrawn": false
              },
              {
                "amount": "10000000000000000000",
                "boosted": true,
                "ejected": false,
                "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_10",
                "lockDuration": "2160",
                "lockId": "10",
                "lockedAt": "1627392720",
                "withdrawn": true
              },
              {
                "amount": "1234000000000000000000",
                "boosted": false,
                "ejected": false,
                "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_11",
                "lockDuration": "1440",
                "lockId": "11",
                "lockedAt": "1627574451",
                "withdrawn": true
              },
              {
                "amount": "111000000000000000000",
                "boosted": false,
                "ejected": false,
                "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_12",
                "lockDuration": "2160",
                "lockId": "12",
                "lockedAt": "1629469230",
                "withdrawn": true
              },
              {
                "amount": "222000000000000000000",
                "boosted": false,
                "ejected": false,
                "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_13",
                "lockDuration": "2160",
                "lockId": "13",
                "lockedAt": "1629470310",
                "withdrawn": true
              },
              {
                "amount": "4321000000000000000000",
                "boosted": false,
                "ejected": false,
                "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_14",
                "lockDuration": "2160",
                "lockId": "14",
                "lockedAt": "1629704798",
                "withdrawn": false
              },
              {
                "amount": "333000000000000000000",
                "boosted": false,
                "ejected": false,
                "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_15",
                "lockDuration": "2160",
                "lockId": "15",
                "lockedAt": "1629712966",
                "withdrawn": true
              },
              {
                "amount": "222000000000000000000",
                "boosted": false,
                "ejected": false,
                "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_16",
                "lockDuration": "2160",
                "lockId": "16",
                "lockedAt": "1629713162",
                "withdrawn": true
              },
              {
                "amount": "4321000000000000000000",
                "boosted": true,
                "ejected": false,
                "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_17",
                "lockDuration": "2160",
                "lockId": "17",
                "lockedAt": "1629733429",
                "withdrawn": true
              },
              {
                "amount": "123000000000000000000",
                "boosted": false,
                "ejected": false,
                "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_18",
                "lockDuration": "720",
                "lockId": "18",
                "lockedAt": "1629798670",
                "withdrawn": false
              },
              {
                "amount": "123000000000000000000",
                "boosted": true,
                "ejected": false,
                "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_19",
                "lockDuration": "720",
                "lockId": "19",
                "lockedAt": "1629798805",
                "withdrawn": true
              },
              {
                "amount": "10000000000000000000",
                "boosted": false,
                "ejected": false,
                "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_2",
                "lockDuration": "360",
                "lockId": "2",
                "lockedAt": "1626866835",
                "withdrawn": true
              },
              {
                "amount": "456000000000000000000",
                "boosted": false,
                "ejected": false,
                "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_20",
                "lockDuration": "1440",
                "lockId": "20",
                "lockedAt": "1629807606",
                "withdrawn": false
              },
              {
                "amount": "456000000000000000000",
                "boosted": true,
                "ejected": false,
                "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_21",
                "lockDuration": "1440",
                "lockId": "21",
                "lockedAt": "1629807982",
                "withdrawn": false
              },
              {
                "amount": "111000000000000000000",
                "boosted": false,
                "ejected": false,
                "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_22",
                "lockDuration": "720",
                "lockId": "22",
                "lockedAt": "1629808132",
                "withdrawn": false
              },
              {
                "amount": "111000000000000000000",
                "boosted": true,
                "ejected": false,
                "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_23",
                "lockDuration": "720",
                "lockId": "23",
                "lockedAt": "1629808252",
                "withdrawn": false
              },
              {
                "amount": "777000000000000000000",
                "boosted": false,
                "ejected": false,
                "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_24",
                "lockDuration": "720",
                "lockId": "24",
                "lockedAt": "1629808327",
                "withdrawn": false
              },
              {
                "amount": "777000000000000000000",
                "boosted": true,
                "ejected": false,
                "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_25",
                "lockDuration": "720",
                "lockId": "25",
                "lockedAt": "1629808432",
                "withdrawn": false
              },
              {
                "amount": "666000000000000000000",
                "boosted": false,
                "ejected": false,
                "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_26",
                "lockDuration": "360",
                "lockId": "26",
                "lockedAt": "1629809737",
                "withdrawn": false
              },
              {
                "amount": "666000000000000000000",
                "boosted": true,
                "ejected": false,
                "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_27",
                "lockDuration": "360",
                "lockId": "27",
                "lockedAt": "1629809857",
                "withdrawn": false
              },
              {
                "amount": "444000000000000000000",
                "boosted": false,
                "ejected": false,
                "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_28",
                "lockDuration": "840",
                "lockId": "28",
                "lockedAt": "1629809932",
                "withdrawn": false
              },
              {
                "amount": "444000000000000000000",
                "boosted": true,
                "ejected": false,
                "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_29",
                "lockDuration": "840",
                "lockId": "29",
                "lockedAt": "1629809977",
                "withdrawn": false
              },
              {
                "amount": "50000000000000000000",
                "boosted": true,
                "ejected": false,
                "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_3",
                "lockDuration": "720",
                "lockId": "3",
                "lockedAt": "1626873180",
                "withdrawn": true
              },
              {
                "amount": "333000000000000000000",
                "boosted": false,
                "ejected": false,
                "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_30",
                "lockDuration": "720",
                "lockId": "30",
                "lockedAt": "1629810022",
                "withdrawn": false
              },
              {
                "amount": "333000000000000000000",
                "boosted": true,
                "ejected": false,
                "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_31",
                "lockDuration": "720",
                "lockId": "31",
                "lockedAt": "1629810082",
                "withdrawn": false
              },
              {
                "amount": "111000000000000000000",
                "boosted": false,
                "ejected": false,
                "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_32",
                "lockDuration": "720",
                "lockId": "32",
                "lockedAt": "1629810172",
                "withdrawn": false
              },
              {
                "amount": "111000000000000000000",
                "boosted": true,
                "ejected": false,
                "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_33",
                "lockDuration": "720",
                "lockId": "33",
                "lockedAt": "1629810232",
                "withdrawn": false
              },
              {
                "amount": "88000000000000000000",
                "boosted": false,
                "ejected": false,
                "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_34",
                "lockDuration": "720",
                "lockId": "34",
                "lockedAt": "1629811253",
                "withdrawn": false
              },
              {
                "amount": "77000000000000000000",
                "boosted": false,
                "ejected": false,
                "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_35",
                "lockDuration": "720",
                "lockId": "35",
                "lockedAt": "1629811388",
                "withdrawn": false
              },
              {
                "amount": "66000000000000000000",
                "boosted": false,
                "ejected": false,
                "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_36",
                "lockDuration": "720",
                "lockId": "36",
                "lockedAt": "1629811493",
                "withdrawn": false
              },
              {
                "amount": "55000000000000000000",
                "boosted": false,
                "ejected": false,
                "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_37",
                "lockDuration": "780",
                "lockId": "37",
                "lockedAt": "1629811658",
                "withdrawn": false
              },
              {
                "amount": "22000000000000000000",
                "boosted": false,
                "ejected": false,
                "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_38",
                "lockDuration": "1320",
                "lockId": "38",
                "lockedAt": "1629811868",
                "withdrawn": false
              },
              {
                "amount": "11000000000000000000",
                "boosted": false,
                "ejected": false,
                "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_39",
                "lockDuration": "660",
                "lockId": "39",
                "lockedAt": "1629812063",
                "withdrawn": false
              },
              {
                "amount": "10000000000000000000",
                "boosted": false,
                "ejected": false,
                "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_4",
                "lockDuration": "2160",
                "lockId": "4",
                "lockedAt": "1627307435",
                "withdrawn": false
              },
              {
                "amount": "55000000000000000000",
                "boosted": false,
                "ejected": false,
                "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_40",
                "lockDuration": "540",
                "lockId": "40",
                "lockedAt": "1629812288",
                "withdrawn": false
              },
              {
                "amount": "11000000000000000000",
                "boosted": false,
                "ejected": false,
                "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_41",
                "lockDuration": "660",
                "lockId": "41",
                "lockedAt": "1629887874",
                "withdrawn": false
              },
              {
                "amount": "1234000000000000000000",
                "boosted": false,
                "ejected": false,
                "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_5",
                "lockDuration": "2160",
                "lockId": "5",
                "lockedAt": "1627307495",
                "withdrawn": true
              },
              {
                "amount": "222000000000000000000",
                "boosted": false,
                "ejected": false,
                "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_6",
                "lockDuration": "2160",
                "lockId": "6",
                "lockedAt": "1627307585",
                "withdrawn": true
              },
              {
                "amount": "555000000000000000000",
                "boosted": false,
                "ejected": false,
                "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_7",
                "lockDuration": "2160",
                "lockId": "7",
                "lockedAt": "1627307750",
                "withdrawn": true
              },
              {
                "amount": "555000000000000000000",
                "boosted": false,
                "ejected": false,
                "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_8",
                "lockDuration": "2160",
                "lockId": "8",
                "lockedAt": "1627307780",
                "withdrawn": true
              },
              {
                "amount": "333000000000000000000",
                "boosted": false,
                "ejected": false,
                "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e_9",
                "lockDuration": "2160",
                "lockId": "9",
                "lockedAt": "1627307826",
                "withdrawn": true
              }
            ],
            "accountRewards": [
              {
                "amount": "62882137889106424730239482838677",
                "id": "0x27fb2f54d294193e1fee5cbe07d74ba049a30325a094defbebcec165e64dd4cc",
                "timestamp": "1629887619",
                "type": "claimed"
              },
              {
                "amount": "64513068469411652",
                "id": "0xaf8593da935990386bb6ee0656b04e0732b0c136c59a0a7d418c6d205ac6c860",
                "timestamp": "1627035830",
                "type": "claimed"
              },
              {
                "amount": "1000000000000000000",
                "id": "0xf7bdb68d7b2ef04263c43b06d3934959caa8ccdf0e47fc39d9ff66a6b7fd6386",
                "timestamp": "1627034105",
                "type": "distributed"
              }
            ],
            "accountVeTokenBalance": "2990135393520816800000",
            "accountWithdrawableRewards": "0",
            "accountWithdrawnRewards": "62882137889106489243307952250329",
            "id": "0x42556f667dfc74704914f98d1e0c0ac4ea2f492e",
            "totalStaked": "1036127990898273800000000",
            "veTokenTotalSupply": "954882541904856126966970"
          },
          "votes": [],
          "leaf": "0x30fa2548da7765171a31929b719b6eaa41ee82302e721bea779be4a377be3a2a"
        },
        {
          "address": "0x441658de8ebcb25d8d320bd5c1abb314b0ce195e",
          "participation": 0,
          "staker": {
            "accountDepositTokenAllowance": "0",
            "accountDepositTokenBalance": "1036147990898273800000000",
            "accountLocks": [],
            "accountRewards": [],
            "accountVeTokenBalance": "0",
            "accountWithdrawableRewards": "0",
            "accountWithdrawnRewards": "0",
            "id": "0x441658de8ebcb25d8d320bd5c1abb314b0ce195e",
            "totalStaked": "1036147990898273800000000",
            "veTokenTotalSupply": "954885125238189459666970"
          },
          "votes": [],
          "leaf": "0xf6a10d9b9339d775308947c539173b11cf25368931eb8e4139a90f9c0fddf471"
        },
        {
          "address": "0x7884c447d5cd98e794c1a5c08e3107fbf29b2877",
          "participation": 0,
          "staker": {
            "accountDepositTokenAllowance": "0",
            "accountDepositTokenBalance": "10000000000000000000000",
            "accountLocks": [],
            "accountRewards": [],
            "accountVeTokenBalance": "0",
            "accountWithdrawableRewards": "0",
            "accountWithdrawnRewards": "0",
            "id": "0x7884c447d5cd98e794c1a5c08e3107fbf29b2877",
            "totalStaked": "1005207000000000000000000",
            "veTokenTotalSupply": "935196208984897241000000"
          },
          "votes": [],
          "leaf": "0x96cacbfd1c62bbb30092901328c816991f38fdfd46bc6c9543c37e4ac5d662f3"
        },
        {
          "address": "0xabf26352aadaaa1cabffb3a55e378bac6bf15791",
          "participation": 1,
          "staker": {
            "accountDepositTokenAllowance": "115792089237316195423570985008687907853269984665640564038457584007913129639935",
            "accountDepositTokenBalance": "0",
            "accountLocks": [
              {
                "amount": "10000000000000000000",
                "boosted": false,
                "ejected": false,
                "id": "0xabf26352aadaaa1cabffb3a55e378bac6bf15791_0",
                "lockDuration": "2160",
                "lockId": "0",
                "lockedAt": "1626867345",
                "withdrawn": false
              },
              {
                "amount": "50000000000000000000",
                "boosted": false,
                "ejected": false,
                "id": "0xabf26352aadaaa1cabffb3a55e378bac6bf15791_1",
                "lockDuration": "1920",
                "lockId": "1",
                "lockedAt": "1626867390",
                "withdrawn": false
              },
              {
                "amount": "100000000000000000000",
                "boosted": false,
                "ejected": false,
                "id": "0xabf26352aadaaa1cabffb3a55e378bac6bf15791_2",
                "lockDuration": "1440",
                "lockId": "2",
                "lockedAt": "1626867390",
                "withdrawn": false
              },
              {
                "amount": "300000000000000000000",
                "boosted": false,
                "ejected": false,
                "id": "0xabf26352aadaaa1cabffb3a55e378bac6bf15791_3",
                "lockDuration": "2160",
                "lockId": "3",
                "lockedAt": "1626867405",
                "withdrawn": false
              },
              {
                "amount": "150000000000000000000",
                "boosted": false,
                "ejected": false,
                "id": "0xabf26352aadaaa1cabffb3a55e378bac6bf15791_4",
                "lockDuration": "720",
                "lockId": "4",
                "lockedAt": "1626867420",
                "withdrawn": false
              },
              {
                "amount": "50000000000000000000",
                "boosted": false,
                "ejected": false,
                "id": "0xabf26352aadaaa1cabffb3a55e378bac6bf15791_5",
                "lockDuration": "360",
                "lockId": "5",
                "lockedAt": "1626867435",
                "withdrawn": false
              },
              {
                "amount": "50000000000000000000",
                "boosted": false,
                "ejected": false,
                "id": "0xabf26352aadaaa1cabffb3a55e378bac6bf15791_6",
                "lockDuration": "480",
                "lockId": "6",
                "lockedAt": "1626867450",
                "withdrawn": false
              },
              {
                "amount": "290000000000000000000",
                "boosted": false,
                "ejected": false,
                "id": "0xabf26352aadaaa1cabffb3a55e378bac6bf15791_7",
                "lockDuration": "2100",
                "lockId": "7",
                "lockedAt": "1626867495",
                "withdrawn": false
              }
            ],
            "accountRewards": [],
            "accountVeTokenBalance": "737120712867945000000",
            "accountWithdrawableRewards": "15660248766534596356745799469793",
            "accountWithdrawnRewards": "0",
            "id": "0xabf26352aadaaa1cabffb3a55e378bac6bf15791",
            "totalStaked": "4979000000000000000000",
            "veTokenTotalSupply": "4706954046201278000000"
          },
          "votes": [
            {
              "id": "QmaRNJzwc9tZikwaZFzrJ3nFFQuoSUkjVU3KdpKMwKe6p3",
              "voter": "0xaBf26352aAdAAa1CabFfB3a55e378bac6BF15791",
              "created": 1630059577,
              "proposal": {
                "id": "QmYYo1CWXBtasWCNK1Qgb2XWno7acUzJCkdP6vEA7oNwEE"
              },
              "choice": 1,
              "space": {
                "id": "piedao"
              }
            },
            {
              "id": "QmcUSGo39zmFwKhbjsSCDyeBMxNkUbJL4SLfKLZmjLut6Q",
              "voter": "0xaBf26352aAdAAa1CabFfB3a55e378bac6BF15791",
              "created": 1629677451,
              "proposal": {
                "id": "QmSbx636cXdGYYKXLnHHb3TGdgUJMt3Nd6TXVMDpTaXxEW"
              },
              "choice": 1,
              "space": {
                "id": "piedao"
              }
            },
            {
              "id": "QmXJpAh8R6MUT3twvShxh8UsQ8cfFAWA1ihMyfbzVZz6ve",
              "voter": "0xaBf26352aAdAAa1CabFfB3a55e378bac6BF15791",
              "created": 1628127702,
              "proposal": {
                "id": "QmPXQsUwzyL12iKSVaUgBrnodtfJWno9Nfq2w1TkfJoj3y"
              },
              "choice": 1,
              "space": {
                "id": "piedao"
              }
            }
          ],
          "leaf": "0x95707c19e80ff95eacfe466b7193c590288d8a7e598cfb20eac4771229046516"
        },
        {
          "address": "0xc96265c36f6d77747f9c259946a1ef55fce946b7",
          "participation": 1,
          "staker": {
            "accountDepositTokenAllowance": "0",
            "accountDepositTokenBalance": "6943687009101726200000000",
            "accountLocks": [
              {
                "amount": "10000000000000000000000",
                "boosted": false,
                "ejected": false,
                "id": "0xc96265c36f6d77747f9c259946a1ef55fce946b7_0",
                "lockDuration": "2160",
                "lockId": "0",
                "lockedAt": "1629195356",
                "withdrawn": false
              },
              {
                "amount": "3569000000000000000000",
                "boosted": false,
                "ejected": false,
                "id": "0xc96265c36f6d77747f9c259946a1ef55fce946b7_1",
                "lockDuration": "1020",
                "lockId": "1",
                "lockedAt": "1629206430",
                "withdrawn": false
              },
              {
                "amount": "772990898273800000000",
                "boosted": false,
                "ejected": false,
                "id": "0xc96265c36f6d77747f9c259946a1ef55fce946b7_2",
                "lockDuration": "360",
                "lockId": "2",
                "lockedAt": "1629207992",
                "withdrawn": false
              },
              {
                "amount": "543000000000000000000",
                "boosted": false,
                "ejected": false,
                "id": "0xc96265c36f6d77747f9c259946a1ef55fce946b7_3",
                "lockDuration": "2160",
                "lockId": "3",
                "lockedAt": "1629280843",
                "withdrawn": false
              },
              {
                "amount": "4000000000000000000000",
                "boosted": false,
                "ejected": false,
                "id": "0xc96265c36f6d77747f9c259946a1ef55fce946b7_4",
                "lockDuration": "2160",
                "lockId": "4",
                "lockedAt": "1629280888",
                "withdrawn": false
              },
              {
                "amount": "1000000000000000000000",
                "boosted": false,
                "ejected": false,
                "id": "0xc96265c36f6d77747f9c259946a1ef55fce946b7_5",
                "lockDuration": "2160",
                "lockId": "5",
                "lockedAt": "1629712276",
                "withdrawn": false
              },
              {
                "amount": "7299000000000000000000",
                "boosted": false,
                "ejected": false,
                "id": "0xc96265c36f6d77747f9c259946a1ef55fce946b7_6",
                "lockDuration": "360",
                "lockId": "6",
                "lockedAt": "1629883816",
                "withdrawn": false
              },
              {
                "amount": "1240000000000000000000",
                "boosted": false,
                "ejected": false,
                "id": "0xc96265c36f6d77747f9c259946a1ef55fce946b7_7",
                "lockDuration": "540",
                "lockId": "7",
                "lockedAt": "1629884719",
                "withdrawn": false
              },
              {
                "amount": "333000000000000000000",
                "boosted": false,
                "ejected": false,
                "id": "0xc96265c36f6d77747f9c259946a1ef55fce946b7_8",
                "lockDuration": "720",
                "lockId": "8",
                "lockedAt": "1629885005",
                "withdrawn": false
              },
              {
                "amount": "556000000000000000000",
                "boosted": false,
                "ejected": false,
                "id": "0xc96265c36f6d77747f9c259946a1ef55fce946b7_9",
                "lockDuration": "2160",
                "lockId": "9",
                "lockedAt": "1629885381",
                "withdrawn": false
              }
            ],
            "accountRewards": [],
            "accountVeTokenBalance": "18371197526438069166970",
            "accountWithdrawableRewards": "0",
            "accountWithdrawnRewards": "0",
            "id": "0xc96265c36f6d77747f9c259946a1ef55fce946b7",
            "totalStaked": "1036116990898273800000000",
            "veTokenTotalSupply": "954880292832761601666970"
          },
          "votes": [
            {
              "id": "QmYLhEBg81eVTD7h7WnBrn8x3XCVe35nrswNWruesT6MJ4",
              "voter": "0xc96265c36F6D77747f9c259946a1eF55FcE946b7",
              "created": 1629536871,
              "proposal": {
                "id": "QmSbx636cXdGYYKXLnHHb3TGdgUJMt3Nd6TXVMDpTaXxEW"
              },
              "choice": 1,
              "space": {
                "id": "piedao"
              }
            },
            {
              "id": "QmUmMZW44iwPQwKkodfsixX1ftV4NPWzk3zYHhmjcdkWuq",
              "voter": "0xc96265c36F6D77747f9c259946a1eF55FcE946b7",
              "created": 1628690656,
              "proposal": {
                "id": "QmSPg29Rgqkx95tioYew13q5FYekiNNMMbPhZ8hTPC3ERK"
              },
              "choice": 1,
              "space": {
                "id": "piedao"
              }
            }
          ],
          "leaf": "0x8fb5631245b6d0aa2eb8dad8b6ec2c766cc227e22c1691cc5a09b77c9146e028"
        },
        {
          "address": "0xd18a54f89603fe4301b29ef6a8ab11b9ba24f139",
          "participation": 0,
          "staker": {
            "accountDepositTokenAllowance": "115792089237316195423570985008687907853269984665640563036900584007913129639935",
            "accountDepositTokenBalance": "109071000000000000000000",
            "accountLocks": [
              {
                "amount": "5000000000000000000",
                "boosted": false,
                "ejected": false,
                "id": "0xd18a54f89603fe4301b29ef6a8ab11b9ba24f139_0",
                "lockDuration": "360",
                "lockId": "0",
                "lockedAt": "1627306400",
                "withdrawn": false
              },
              {
                "amount": "1000000000000000000",
                "boosted": false,
                "ejected": false,
                "id": "0xd18a54f89603fe4301b29ef6a8ab11b9ba24f139_1",
                "lockDuration": "2160",
                "lockId": "1",
                "lockedAt": "1627306580",
                "withdrawn": false
              },
              {
                "amount": "10000000000000000000",
                "boosted": false,
                "ejected": false,
                "id": "0xd18a54f89603fe4301b29ef6a8ab11b9ba24f139_10",
                "lockDuration": "2160",
                "lockId": "10",
                "lockedAt": "1627635968",
                "withdrawn": false
              },
              {
                "amount": "10000000000000000000",
                "boosted": false,
                "ejected": false,
                "id": "0xd18a54f89603fe4301b29ef6a8ab11b9ba24f139_11",
                "lockDuration": "2160",
                "lockId": "11",
                "lockedAt": "1627636133",
                "withdrawn": false
              },
              {
                "amount": "10000000000000000000",
                "boosted": false,
                "ejected": false,
                "id": "0xd18a54f89603fe4301b29ef6a8ab11b9ba24f139_12",
                "lockDuration": "2160",
                "lockId": "12",
                "lockedAt": "1627639871",
                "withdrawn": false
              },
              {
                "amount": "56000000000000000000",
                "boosted": false,
                "ejected": false,
                "id": "0xd18a54f89603fe4301b29ef6a8ab11b9ba24f139_13",
                "lockDuration": "2160",
                "lockId": "13",
                "lockedAt": "1627639901",
                "withdrawn": false
              },
              {
                "amount": "1000000000000000000000",
                "boosted": false,
                "ejected": false,
                "id": "0xd18a54f89603fe4301b29ef6a8ab11b9ba24f139_14",
                "lockDuration": "2160",
                "lockId": "14",
                "lockedAt": "1627640096",
                "withdrawn": true
              },
              {
                "amount": "12345000000000000000000",
                "boosted": false,
                "ejected": false,
                "id": "0xd18a54f89603fe4301b29ef6a8ab11b9ba24f139_15",
                "lockDuration": "2160",
                "lockId": "15",
                "lockedAt": "1627643835",
                "withdrawn": false
              },
              {
                "amount": "987000000000000000000",
                "boosted": false,
                "ejected": false,
                "id": "0xd18a54f89603fe4301b29ef6a8ab11b9ba24f139_16",
                "lockDuration": "2160",
                "lockId": "16",
                "lockedAt": "1627644001",
                "withdrawn": false
              },
              {
                "amount": "456000000000000000000",
                "boosted": false,
                "ejected": false,
                "id": "0xd18a54f89603fe4301b29ef6a8ab11b9ba24f139_17",
                "lockDuration": "2160",
                "lockId": "17",
                "lockedAt": "1627644046",
                "withdrawn": false
              },
              {
                "amount": "987654000000000000000000",
                "boosted": false,
                "ejected": false,
                "id": "0xd18a54f89603fe4301b29ef6a8ab11b9ba24f139_18",
                "lockDuration": "2040",
                "lockId": "18",
                "lockedAt": "1627910464",
                "withdrawn": false
              },
              {
                "amount": "1000000000000000000",
                "boosted": false,
                "ejected": false,
                "id": "0xd18a54f89603fe4301b29ef6a8ab11b9ba24f139_19",
                "lockDuration": "2160",
                "lockId": "19",
                "lockedAt": "1629963996",
                "withdrawn": false
              },
              {
                "amount": "1000000000000000000",
                "boosted": false,
                "ejected": false,
                "id": "0xd18a54f89603fe4301b29ef6a8ab11b9ba24f139_2",
                "lockDuration": "420",
                "lockId": "2",
                "lockedAt": "1627307600",
                "withdrawn": false
              },
              {
                "amount": "19000000000000000000",
                "boosted": false,
                "ejected": false,
                "id": "0xd18a54f89603fe4301b29ef6a8ab11b9ba24f139_20",
                "lockDuration": "360",
                "lockId": "20",
                "lockedAt": "1629964056",
                "withdrawn": false
              },
              {
                "amount": "1000000000000000000",
                "boosted": false,
                "ejected": false,
                "id": "0xd18a54f89603fe4301b29ef6a8ab11b9ba24f139_3",
                "lockDuration": "480",
                "lockId": "3",
                "lockedAt": "1627307961",
                "withdrawn": false
              },
              {
                "amount": "1000000000000000000",
                "boosted": false,
                "ejected": false,
                "id": "0xd18a54f89603fe4301b29ef6a8ab11b9ba24f139_4",
                "lockDuration": "540",
                "lockId": "4",
                "lockedAt": "1627308051",
                "withdrawn": false
              },
              {
                "amount": "1000000000000000000",
                "boosted": true,
                "ejected": false,
                "id": "0xd18a54f89603fe4301b29ef6a8ab11b9ba24f139_5",
                "lockDuration": "480",
                "lockId": "5",
                "lockedAt": "1627308231",
                "withdrawn": true
              },
              {
                "amount": "5000000000000000000",
                "boosted": true,
                "ejected": false,
                "id": "0xd18a54f89603fe4301b29ef6a8ab11b9ba24f139_6",
                "lockDuration": "360",
                "lockId": "6",
                "lockedAt": "1627308336",
                "withdrawn": true
              },
              {
                "amount": "1000000000000000000",
                "boosted": true,
                "ejected": false,
                "id": "0xd18a54f89603fe4301b29ef6a8ab11b9ba24f139_7",
                "lockDuration": "540",
                "lockId": "7",
                "lockedAt": "1627308381",
                "withdrawn": false
              },
              {
                "amount": "1000000000000000000",
                "boosted": true,
                "ejected": false,
                "id": "0xd18a54f89603fe4301b29ef6a8ab11b9ba24f139_8",
                "lockDuration": "2160",
                "lockId": "8",
                "lockedAt": "1627308411",
                "withdrawn": false
              },
              {
                "amount": "1000000000000000000",
                "boosted": true,
                "ejected": false,
                "id": "0xd18a54f89603fe4301b29ef6a8ab11b9ba24f139_9",
                "lockDuration": "420",
                "lockId": "9",
                "lockedAt": "1627308651",
                "withdrawn": false
              }
            ],
            "accountRewards": [
              {
                "amount": "24278693201559378942",
                "id": "0x54861b9e9906bb42f68d03315e8d7c8d58a8271cc3e978bbc01ae0db358f5675",
                "timestamp": "1627311945",
                "type": "claimed"
              },
              {
                "amount": "10000",
                "id": "0x89b9526339574188b82a942ecc20d7bab272a88d0f7a34c5c95cb32907a1ed41",
                "timestamp": "1627310693",
                "type": "distributed"
              },
              {
                "amount": "10000000000000000000000",
                "id": "0xb4341eb41e3c70194085525d647048c5a99749e7fc27909c7a63494c343eab16",
                "timestamp": "1627310844",
                "type": "distributed"
              },
              {
                "amount": "191206455632669745215347169128",
                "id": "0xf64432e49e17158084c8e9b6d284db3a0c829fa0c54d3911e2a19d85a1ba97d8",
                "timestamp": "1627392885",
                "type": "claimed"
              }
            ],
            "accountVeTokenBalance": "931785671605362628700000",
            "accountWithdrawableRewards": "0",
            "accountWithdrawnRewards": "191206455656948438416906548070",
            "id": "0xd18a54f89603fe4301b29ef6a8ab11b9ba24f139",
            "totalStaked": "1036147990898273800000000",
            "veTokenTotalSupply": "954885125238189459666970"
          },
          "votes": [],
          "leaf": "0x63aa17553ed27b5535759d550ebe046268ca2579bce2cebd85ad3adf9f01270b"
        },
        {
          "address": "0xe0bdc50a72b46d51c5572fb878f62314667778bb",
          "participation": 0,
          "staker": {
            "accountDepositTokenAllowance": "115792089237316195423570985008687907853269984665640564039456584007913129639935",
            "accountDepositTokenBalance": "9999999999000000000000000000",
            "accountLocks": [
              {
                "amount": "1000000000000000000",
                "boosted": false,
                "ejected": false,
                "id": "0xe0bdc50a72b46d51c5572fb878f62314667778bb_0",
                "lockDuration": "2160",
                "lockId": "0",
                "lockedAt": "1627309748",
                "withdrawn": false
              }
            ],
            "accountRewards": [],
            "accountVeTokenBalance": "1000000000000000000",
            "accountWithdrawableRewards": "21245161739660937601878505341",
            "accountWithdrawnRewards": "0",
            "id": "0xe0bdc50a72b46d51c5572fb878f62314667778bb",
            "totalStaked": "4979000000000000000000",
            "veTokenTotalSupply": "4706954046201278000000"
          },
          "votes": [],
          "leaf": "0x9d1165196932daa7779a0a3d5a0aea21400d58ba34ccec30a3a2117140111a25"
        }
      ]
    },
    "rewards": "to be implemented",
    "__v": 0
  }
];

export const EpochsStub = (): Array<EpochEntity> => {
  // returning all epochs...
  return epochs;
}