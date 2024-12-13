export default {
	abi: [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "orderIndex",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "productId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "size",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "isLong",
          "type": "bool"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "triggerPrice",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "triggerAboveThreshold",
          "type": "bool"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "executionFee",
          "type": "uint256"
        }
      ],
      "name": "CancelDecreaseOrder",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "orderIndex",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "productId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "margin",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "leverage",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "tradeFee",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "isLong",
          "type": "bool"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "triggerPrice",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "triggerAboveThreshold",
          "type": "bool"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "executionFee",
          "type": "uint256"
        }
      ],
      "name": "CancelIncreaseOrder",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "orderIndex",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "productId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "size",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "isLong",
          "type": "bool"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "triggerPrice",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "triggerAboveThreshold",
          "type": "bool"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "executionFee",
          "type": "uint256"
        }
      ],
      "name": "CreateDecreaseOrder",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "orderIndex",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "productId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "margin",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "leverage",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "tradeFee",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "isLong",
          "type": "bool"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "triggerPrice",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "triggerAboveThreshold",
          "type": "bool"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "executionFee",
          "type": "uint256"
        }
      ],
      "name": "CreateIncreaseOrder",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "orderIndex",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "productId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "size",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "isLong",
          "type": "bool"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "triggerPrice",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "triggerAboveThreshold",
          "type": "bool"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "executionFee",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "executionPrice",
          "type": "uint256"
        }
      ],
      "name": "ExecuteDecreaseOrder",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "orderIndex",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "executionError",
          "type": "string"
        }
      ],
      "name": "ExecuteDecreaseOrderError",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "orderIndex",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "productId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "margin",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "leverage",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "tradeFee",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "isLong",
          "type": "bool"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "triggerPrice",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "triggerAboveThreshold",
          "type": "bool"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "executionFee",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "executionPrice",
          "type": "uint256"
        }
      ],
      "name": "ExecuteIncreaseOrder",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "orderIndex",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "executionError",
          "type": "string"
        }
      ],
      "name": "ExecuteIncreaseOrderError",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint8",
          "name": "version",
          "type": "uint8"
        }
      ],
      "name": "Initialized",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "keeper",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "isAlive",
          "type": "bool"
        }
      ],
      "name": "OwnerSetKeeper",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "maxOrderSize",
          "type": "uint256"
        }
      ],
      "name": "OwnerSetMaxOrderSize",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "minExecutionFee",
          "type": "uint256"
        }
      ],
      "name": "OwnerSetMinExecutionFee",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "referralStorage",
          "type": "address"
        }
      ],
      "name": "OwnerSetReferralStorage",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "gov",
          "type": "address"
        }
      ],
      "name": "SetGov",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "SetOwner",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "orderIndex",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "productId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "size",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "isLong",
          "type": "bool"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "triggerPrice",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "triggerAboveThreshold",
          "type": "bool"
        }
      ],
      "name": "UpdateDecreaseOrder",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "orderIndex",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "productId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "margin",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "leverage",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "tradeFee",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "isLong",
          "type": "bool"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "triggerPrice",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "triggerAboveThreshold",
          "type": "bool"
        }
      ],
      "name": "UpdateIncreaseOrder",
      "type": "event"
    },
    {
      "stateMutability": "payable",
      "type": "fallback"
    },
    {
      "inputs": [],
      "name": "EXECUTE_FEE_CAP",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "acceptGov",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "acceptOwner",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "accountOrderSize",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_orderIndex",
          "type": "uint256"
        }
      ],
      "name": "cancelDecreaseOrder",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_orderIndex",
          "type": "uint256"
        }
      ],
      "name": "cancelIncreaseOrder",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256[]",
          "name": "_increaseOrderIndexes",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256[]",
          "name": "_decreaseOrderIndexes",
          "type": "uint256[]"
        }
      ],
      "name": "cancelMultiple",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_productId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_size",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "_isLong",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "_triggerPrice",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "_triggerAboveThreshold",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "_executionFee",
          "type": "uint256"
        }
      ],
      "name": "createDecreaseOrder",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_productId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_margin",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_leverage",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "_isLong",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "_triggerPrice",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "_triggerAboveThreshold",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "_executionFee",
          "type": "uint256"
        },
        {
          "internalType": "bytes32",
          "name": "_referralCode",
          "type": "bytes32"
        }
      ],
      "name": "createIncreaseOrder",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "decreaseOrders",
      "outputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "productId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "size",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "isLong",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "triggerPrice",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "triggerAboveThreshold",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "executionFee",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "decreaseOrdersIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_address",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_orderIndex",
          "type": "uint256"
        },
        {
          "internalType": "address payable",
          "name": "_feeReceiver",
          "type": "address"
        }
      ],
      "name": "executeDecreaseOrder",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_address",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_orderIndex",
          "type": "uint256"
        },
        {
          "internalType": "address payable",
          "name": "_feeReceiver",
          "type": "address"
        }
      ],
      "name": "executeIncreaseOrder",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "_openAddresses",
          "type": "address[]"
        },
        {
          "internalType": "uint256[]",
          "name": "_increaseOrderIndexes",
          "type": "uint256[]"
        },
        {
          "internalType": "address[]",
          "name": "_closeAddresses",
          "type": "address[]"
        },
        {
          "internalType": "uint256[]",
          "name": "_decreaseOrderIndexes",
          "type": "uint256[]"
        },
        {
          "internalType": "address payable",
          "name": "_feeReceiver",
          "type": "address"
        }
      ],
      "name": "executeOrders",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "tokens",
          "type": "address[]"
        },
        {
          "internalType": "uint256[]",
          "name": "prices",
          "type": "uint256[]"
        },
        {
          "internalType": "address[]",
          "name": "_openAddresses",
          "type": "address[]"
        },
        {
          "internalType": "uint256[]",
          "name": "_increaseOrderIndexes",
          "type": "uint256[]"
        },
        {
          "internalType": "address[]",
          "name": "_closeAddresses",
          "type": "address[]"
        },
        {
          "internalType": "uint256[]",
          "name": "_decreaseOrderIndexes",
          "type": "uint256[]"
        },
        {
          "internalType": "address payable",
          "name": "_feeReceiver",
          "type": "address"
        }
      ],
      "name": "executeOrdersWithPrices",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_account",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_orderIndex",
          "type": "uint256"
        }
      ],
      "name": "getDecreaseOrder",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "productId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "size",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "isLong",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "triggerPrice",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "triggerAboveThreshold",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "executionFee",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_account",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_orderIndex",
          "type": "uint256"
        }
      ],
      "name": "getIncreaseOrder",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "productId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "margin",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "leverage",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "isLong",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "triggerPrice",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "triggerAboveThreshold",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "executionFee",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "gov",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "increaseOrders",
      "outputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "productId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "margin",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "leverage",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "tradeFee",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "isLong",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "triggerPrice",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "triggerAboveThreshold",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "executionFee",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "increaseOrdersIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_collateralToken",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_minExecutionFee",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_kiloStorageAddr",
          "type": "address"
        }
      ],
      "name": "initialize",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "isKeeper",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "minExecutionFee",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "newGov",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "newOwner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "pendingGov",
          "type": "address"
        }
      ],
      "name": "setGov",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_account",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "_isActive",
          "type": "bool"
        }
      ],
      "name": "setKeeper",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_maxOrderSize",
          "type": "uint256"
        }
      ],
      "name": "setMaxOrderSize",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_minExecutionFee",
          "type": "uint256"
        }
      ],
      "name": "setMinExecutionFee",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_oracle",
          "type": "address"
        }
      ],
      "name": "setOracle",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "pendingOwner",
          "type": "address"
        }
      ],
      "name": "setOwner",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_referralStorage",
          "type": "address"
        }
      ],
      "name": "setReferralStorage",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_orderIndex",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_size",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_triggerPrice",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "_triggerAboveThreshold",
          "type": "bool"
        }
      ],
      "name": "updateDecreaseOrder",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_orderIndex",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_leverage",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_triggerPrice",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "_triggerAboveThreshold",
          "type": "bool"
        }
      ],
      "name": "updateIncreaseOrder",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bool",
          "name": "_triggerAboveThreshold",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "_triggerPrice",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_productId",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "_isLong",
          "type": "bool"
        }
      ],
      "name": "validatePositionOrderPrice",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "currentPrice",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "stateMutability": "payable",
      "type": "receive"
    }
  ]
}