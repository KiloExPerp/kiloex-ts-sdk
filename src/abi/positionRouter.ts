export default {
	abi: [
		{
		  "inputs": [],
		  "stateMutability": "nonpayable",
		  "type": "constructor"
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
			  "internalType": "bool",
			  "name": "isLong",
			  "type": "bool"
			},
			{
			  "indexed": false,
			  "internalType": "uint256",
			  "name": "acceptablePrice",
			  "type": "uint256"
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
			  "name": "index",
			  "type": "uint256"
			},
			{
			  "indexed": false,
			  "internalType": "uint256",
			  "name": "blockGap",
			  "type": "uint256"
			},
			{
			  "indexed": false,
			  "internalType": "uint256",
			  "name": "timeGap",
			  "type": "uint256"
			}
		  ],
		  "name": "CancelDecreasePosition",
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
			  "name": "acceptablePrice",
			  "type": "uint256"
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
			  "name": "index",
			  "type": "uint256"
			},
			{
			  "indexed": false,
			  "internalType": "uint256",
			  "name": "blockGap",
			  "type": "uint256"
			},
			{
			  "indexed": false,
			  "internalType": "uint256",
			  "name": "timeGap",
			  "type": "uint256"
			}
		  ],
		  "name": "CancelIncreasePosition",
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
			  "internalType": "bool",
			  "name": "isLong",
			  "type": "bool"
			},
			{
			  "indexed": false,
			  "internalType": "uint256",
			  "name": "acceptablePrice",
			  "type": "uint256"
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
			  "name": "index",
			  "type": "uint256"
			},
			{
			  "indexed": false,
			  "internalType": "uint256",
			  "name": "blockNumber",
			  "type": "uint256"
			},
			{
			  "indexed": false,
			  "internalType": "uint256",
			  "name": "blockTime",
			  "type": "uint256"
			},
			{
			  "indexed": false,
			  "internalType": "bytes",
			  "name": "extraInfo",
			  "type": "bytes"
			}
		  ],
		  "name": "CreateDecreasePositionV3",
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
			  "name": "acceptablePrice",
			  "type": "uint256"
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
			  "name": "index",
			  "type": "uint256"
			},
			{
			  "indexed": false,
			  "internalType": "uint256",
			  "name": "blockNumber",
			  "type": "uint256"
			},
			{
			  "indexed": false,
			  "internalType": "uint256",
			  "name": "blockTime",
			  "type": "uint256"
			},
			{
			  "indexed": false,
			  "internalType": "uint256",
			  "name": "gasPrice",
			  "type": "uint256"
			},
			{
			  "indexed": false,
			  "internalType": "bytes",
			  "name": "extraInfo",
			  "type": "bytes"
			}
		  ],
		  "name": "CreateIncreasePositionV3",
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
			  "name": "productId",
			  "type": "uint256"
			},
			{
			  "indexed": false,
			  "internalType": "uint256",
			  "name": "index",
			  "type": "uint256"
			},
			{
			  "indexed": false,
			  "internalType": "string",
			  "name": "executionError",
			  "type": "string"
			}
		  ],
		  "name": "ExecuteDecreasePositionError",
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
			  "internalType": "bool",
			  "name": "isLong",
			  "type": "bool"
			},
			{
			  "indexed": false,
			  "internalType": "uint256",
			  "name": "acceptablePrice",
			  "type": "uint256"
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
			  "name": "index",
			  "type": "uint256"
			},
			{
			  "indexed": false,
			  "internalType": "uint256",
			  "name": "blockGap",
			  "type": "uint256"
			},
			{
			  "indexed": false,
			  "internalType": "uint256",
			  "name": "timeGap",
			  "type": "uint256"
			},
			{
			  "indexed": false,
			  "internalType": "bytes",
			  "name": "extraInfo",
			  "type": "bytes"
			}
		  ],
		  "name": "ExecuteDecreasePositionV3",
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
			  "name": "productId",
			  "type": "uint256"
			},
			{
			  "indexed": false,
			  "internalType": "uint256",
			  "name": "index",
			  "type": "uint256"
			},
			{
			  "indexed": false,
			  "internalType": "string",
			  "name": "executionError",
			  "type": "string"
			}
		  ],
		  "name": "ExecuteIncreasePositionError",
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
			  "name": "acceptablePrice",
			  "type": "uint256"
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
			  "name": "index",
			  "type": "uint256"
			},
			{
			  "indexed": false,
			  "internalType": "uint256",
			  "name": "blockGap",
			  "type": "uint256"
			},
			{
			  "indexed": false,
			  "internalType": "uint256",
			  "name": "timeGap",
			  "type": "uint256"
			},
			{
			  "indexed": false,
			  "internalType": "bytes",
			  "name": "extraInfo",
			  "type": "bytes"
			}
		  ],
		  "name": "ExecuteIncreasePositionV3",
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
			  "internalType": "bool",
			  "name": "allowUserCloseOnly",
			  "type": "bool"
			}
		  ],
		  "name": "OwnerSetAllowUserCloseOnly",
		  "type": "event"
		},
		{
		  "anonymous": false,
		  "inputs": [
			{
			  "indexed": false,
			  "internalType": "uint256",
			  "name": "minBlockDelayKeeper",
			  "type": "uint256"
			},
			{
			  "indexed": false,
			  "internalType": "uint256",
			  "name": "minTimeExecuteDelayPublic",
			  "type": "uint256"
			},
			{
			  "indexed": false,
			  "internalType": "uint256",
			  "name": "minTimeCancelDelayPublic",
			  "type": "uint256"
			},
			{
			  "indexed": false,
			  "internalType": "uint256",
			  "name": "maxTimeDelay",
			  "type": "uint256"
			}
		  ],
		  "name": "OwnerSetDelayValues",
		  "type": "event"
		},
		{
		  "anonymous": false,
		  "inputs": [
			{
			  "indexed": false,
			  "internalType": "bool",
			  "name": "isUserCancelEnabled",
			  "type": "bool"
			}
		  ],
		  "name": "OwnerSetIsUserCancelEnabled",
		  "type": "event"
		},
		{
		  "anonymous": false,
		  "inputs": [
			{
			  "indexed": false,
			  "internalType": "bool",
			  "name": "isUserExecuteEnabled",
			  "type": "bool"
			}
		  ],
		  "name": "OwnerSetIsUserExecuteEnabled",
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
			  "indexed": true,
			  "internalType": "address",
			  "name": "account",
			  "type": "address"
			},
			{
			  "indexed": false,
			  "internalType": "bool",
			  "name": "isActive",
			  "type": "bool"
			}
		  ],
		  "name": "OwnerSetPositionKeeper",
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
			  "internalType": "uint256",
			  "name": "increasePositionRequestKeysStart",
			  "type": "uint256"
			},
			{
			  "indexed": false,
			  "internalType": "uint256",
			  "name": "decreasePositionRequestKeysStart",
			  "type": "uint256"
			}
		  ],
		  "name": "OwnerSetRequestKeysStartValues",
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
		  "inputs": [],
		  "name": "allowUserCloseOnly",
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
		  "inputs": [
			{
			  "internalType": "bytes32",
			  "name": "_key",
			  "type": "bytes32"
			},
			{
			  "internalType": "address payable",
			  "name": "_executionFeeReceiver",
			  "type": "address"
			}
		  ],
		  "name": "cancelDecreasePosition",
		  "outputs": [
			{
			  "internalType": "bool",
			  "name": "",
			  "type": "bool"
			}
		  ],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "bytes32",
			  "name": "_key",
			  "type": "bytes32"
			},
			{
			  "internalType": "address payable",
			  "name": "_executionFeeReceiver",
			  "type": "address"
			}
		  ],
		  "name": "cancelIncreasePosition",
		  "outputs": [
			{
			  "internalType": "bool",
			  "name": "",
			  "type": "bool"
			}
		  ],
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
			  "name": "_margin",
			  "type": "uint256"
			},
			{
			  "internalType": "bool",
			  "name": "_isLong",
			  "type": "bool"
			},
			{
			  "internalType": "uint256",
			  "name": "_acceptablePrice",
			  "type": "uint256"
			},
			{
			  "internalType": "uint256",
			  "name": "_executionFee",
			  "type": "uint256"
			}
		  ],
		  "name": "createDecreasePosition",
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
			  "internalType": "bool",
			  "name": "_isLong",
			  "type": "bool"
			},
			{
			  "internalType": "uint256",
			  "name": "_acceptablePrice",
			  "type": "uint256"
			},
			{
			  "internalType": "uint256",
			  "name": "_executionFee",
			  "type": "uint256"
			},
			{
			  "internalType": "address",
			  "name": "_account",
			  "type": "address"
			},
			{
			  "internalType": "bool",
			  "name": "_1ct",
			  "type": "bool"
			},
			{
			  "internalType": "bytes",
			  "name": "extraInfo",
			  "type": "bytes"
			}
		  ],
		  "name": "createDecreasePositionDelegateV3",
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
			  "internalType": "bool",
			  "name": "_isLong",
			  "type": "bool"
			},
			{
			  "internalType": "uint256",
			  "name": "_acceptablePrice",
			  "type": "uint256"
			},
			{
			  "internalType": "uint256",
			  "name": "_executionFee",
			  "type": "uint256"
			},
			{
			  "internalType": "bytes",
			  "name": "extraInfo",
			  "type": "bytes"
			}
		  ],
		  "name": "createDecreasePositionV3",
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
			  "name": "_acceptablePrice",
			  "type": "uint256"
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
		  "name": "createIncreasePosition",
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
			  "name": "_acceptablePrice",
			  "type": "uint256"
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
			},
			{
			  "internalType": "address",
			  "name": "_account",
			  "type": "address"
			},
			{
			  "internalType": "bool",
			  "name": "_1ct",
			  "type": "bool"
			},
			{
			  "internalType": "bytes",
			  "name": "extraInfo",
			  "type": "bytes"
			}
		  ],
		  "name": "createIncreasePositionDelegateV3",
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
			  "name": "_acceptablePrice",
			  "type": "uint256"
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
			},
			{
			  "internalType": "bytes",
			  "name": "extraInfo",
			  "type": "bytes"
			}
		  ],
		  "name": "createIncreasePositionV3",
		  "outputs": [],
		  "stateMutability": "payable",
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
			  "name": "_acceptablePrice",
			  "type": "uint256"
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
			},
			{
			  "internalType": "bytes",
			  "name": "extraInfo",
			  "type": "bytes"
			}
		  ],
		  "name": "createIncreasePositionWithAccount",
		  "outputs": [],
		  "stateMutability": "payable",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			}
		  ],
		  "name": "decreasePositionRequestKeys",
		  "outputs": [
			{
			  "internalType": "bytes32",
			  "name": "",
			  "type": "bytes32"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function"
		},
		{
		  "inputs": [],
		  "name": "decreasePositionRequestKeysStart",
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
			  "internalType": "bytes32",
			  "name": "",
			  "type": "bytes32"
			}
		  ],
		  "name": "decreasePositionRequests",
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
			  "internalType": "bool",
			  "name": "isLong",
			  "type": "bool"
			},
			{
			  "internalType": "uint256",
			  "name": "acceptablePrice",
			  "type": "uint256"
			},
			{
			  "internalType": "uint256",
			  "name": "executionFee",
			  "type": "uint256"
			},
			{
			  "internalType": "uint256",
			  "name": "index",
			  "type": "uint256"
			},
			{
			  "internalType": "uint256",
			  "name": "blockNumber",
			  "type": "uint256"
			},
			{
			  "internalType": "uint256",
			  "name": "blockTime",
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
		  "name": "decreasePositionsIndex",
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
			  "internalType": "bytes32",
			  "name": "_key",
			  "type": "bytes32"
			},
			{
			  "internalType": "address payable",
			  "name": "_executionFeeReceiver",
			  "type": "address"
			}
		  ],
		  "name": "executeDecreasePosition",
		  "outputs": [
			{
			  "internalType": "bool",
			  "name": "",
			  "type": "bool"
			},
			{
			  "internalType": "bool",
			  "name": "",
			  "type": "bool"
			}
		  ],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "bytes32",
			  "name": "_key",
			  "type": "bytes32"
			},
			{
			  "internalType": "address payable",
			  "name": "_executionFeeReceiver",
			  "type": "address"
			}
		  ],
		  "name": "executeIncreasePosition",
		  "outputs": [
			{
			  "internalType": "bool",
			  "name": "",
			  "type": "bool"
			}
		  ],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "address[]",
			  "name": "_tokens",
			  "type": "address[]"
			},
			{
			  "internalType": "uint256[]",
			  "name": "_prices",
			  "type": "uint256[]"
			},
			{
			  "internalType": "address[]",
			  "name": "_increasePositionAccounts",
			  "type": "address[]"
			},
			{
			  "internalType": "uint256[]",
			  "name": "_increasePositionIndexes",
			  "type": "uint256[]"
			},
			{
			  "internalType": "address[]",
			  "name": "_decreasePositionAccounts",
			  "type": "address[]"
			},
			{
			  "internalType": "uint256[]",
			  "name": "_decreasePositionIndexes",
			  "type": "uint256[]"
			},
			{
			  "components": [
				{
				  "internalType": "address",
				  "name": "decreasePositionAccount",
				  "type": "address"
				},
				{
				  "internalType": "uint256",
				  "name": "decreasePositionIndex",
				  "type": "uint256"
				},
				{
				  "internalType": "uint256[]",
				  "name": "closedOrderIndexes",
				  "type": "uint256[]"
				}
			  ],
			  "internalType": "struct PositionRouter.CloseOrdersWithoutPosition[]",
			  "name": "cancelOrders",
			  "type": "tuple[]"
			},
			{
			  "internalType": "address payable",
			  "name": "_executionFeeReceiver",
			  "type": "address"
			}
		  ],
		  "name": "executePositionsWithPricesT",
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
			  "name": "_index",
			  "type": "uint256"
			}
		  ],
		  "name": "getDecreasePositionRequest",
		  "outputs": [
			{
			  "components": [
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
				  "internalType": "bool",
				  "name": "isLong",
				  "type": "bool"
				},
				{
				  "internalType": "uint256",
				  "name": "acceptablePrice",
				  "type": "uint256"
				},
				{
				  "internalType": "uint256",
				  "name": "executionFee",
				  "type": "uint256"
				},
				{
				  "internalType": "uint256",
				  "name": "index",
				  "type": "uint256"
				},
				{
				  "internalType": "uint256",
				  "name": "blockNumber",
				  "type": "uint256"
				},
				{
				  "internalType": "uint256",
				  "name": "blockTime",
				  "type": "uint256"
				}
			  ],
			  "internalType": "struct PositionRouter.DecreasePositionRequest",
			  "name": "",
			  "type": "tuple"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "bytes32",
			  "name": "_key",
			  "type": "bytes32"
			}
		  ],
		  "name": "getDecreasePositionRequestFromKey",
		  "outputs": [
			{
			  "components": [
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
				  "internalType": "bool",
				  "name": "isLong",
				  "type": "bool"
				},
				{
				  "internalType": "uint256",
				  "name": "acceptablePrice",
				  "type": "uint256"
				},
				{
				  "internalType": "uint256",
				  "name": "executionFee",
				  "type": "uint256"
				},
				{
				  "internalType": "uint256",
				  "name": "index",
				  "type": "uint256"
				},
				{
				  "internalType": "uint256",
				  "name": "blockNumber",
				  "type": "uint256"
				},
				{
				  "internalType": "uint256",
				  "name": "blockTime",
				  "type": "uint256"
				}
			  ],
			  "internalType": "struct PositionRouter.DecreasePositionRequest",
			  "name": "",
			  "type": "tuple"
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
			  "name": "_index",
			  "type": "uint256"
			}
		  ],
		  "name": "getIncreasePositionRequest",
		  "outputs": [
			{
			  "components": [
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
				  "name": "acceptablePrice",
				  "type": "uint256"
				},
				{
				  "internalType": "uint256",
				  "name": "executionFee",
				  "type": "uint256"
				},
				{
				  "internalType": "uint256",
				  "name": "index",
				  "type": "uint256"
				},
				{
				  "internalType": "uint256",
				  "name": "blockNumber",
				  "type": "uint256"
				},
				{
				  "internalType": "uint256",
				  "name": "blockTime",
				  "type": "uint256"
				}
			  ],
			  "internalType": "struct PositionRouter.IncreasePositionRequest",
			  "name": "",
			  "type": "tuple"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "bytes32",
			  "name": "_key",
			  "type": "bytes32"
			}
		  ],
		  "name": "getIncreasePositionRequestFromKey",
		  "outputs": [
			{
			  "components": [
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
				  "name": "acceptablePrice",
				  "type": "uint256"
				},
				{
				  "internalType": "uint256",
				  "name": "executionFee",
				  "type": "uint256"
				},
				{
				  "internalType": "uint256",
				  "name": "index",
				  "type": "uint256"
				},
				{
				  "internalType": "uint256",
				  "name": "blockNumber",
				  "type": "uint256"
				},
				{
				  "internalType": "uint256",
				  "name": "blockTime",
				  "type": "uint256"
				}
			  ],
			  "internalType": "struct PositionRouter.IncreasePositionRequest",
			  "name": "",
			  "type": "tuple"
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
			  "name": "_index",
			  "type": "uint256"
			}
		  ],
		  "name": "getRequestKey",
		  "outputs": [
			{
			  "internalType": "bytes32",
			  "name": "",
			  "type": "bytes32"
			}
		  ],
		  "stateMutability": "pure",
		  "type": "function"
		},
		{
		  "inputs": [],
		  "name": "getRequestQueueLengths",
		  "outputs": [
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			},
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			},
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			},
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
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			}
		  ],
		  "name": "increasePositionRequestKeys",
		  "outputs": [
			{
			  "internalType": "bytes32",
			  "name": "",
			  "type": "bytes32"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function"
		},
		{
		  "inputs": [],
		  "name": "increasePositionRequestKeysStart",
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
			  "internalType": "bytes32",
			  "name": "",
			  "type": "bytes32"
			}
		  ],
		  "name": "increasePositionRequests",
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
			  "name": "acceptablePrice",
			  "type": "uint256"
			},
			{
			  "internalType": "uint256",
			  "name": "executionFee",
			  "type": "uint256"
			},
			{
			  "internalType": "uint256",
			  "name": "index",
			  "type": "uint256"
			},
			{
			  "internalType": "uint256",
			  "name": "blockNumber",
			  "type": "uint256"
			},
			{
			  "internalType": "uint256",
			  "name": "blockTime",
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
		  "name": "increasePositionsIndex",
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
			  "name": "_orderBookAddr",
			  "type": "address"
			}
		  ],
		  "name": "initOrderBook",
		  "outputs": [],
		  "stateMutability": "nonpayable",
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
		  "name": "isPositionKeeper",
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
		  "name": "isUserCancelEnabled",
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
		  "name": "isUserExecuteEnabled",
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
		  "name": "maxTimeDelay",
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
		  "name": "minBlockDelayKeeper",
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
		  "name": "minTimeCancelDelayPublic",
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
		  "name": "minTimeExecuteDelayPublic",
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
			  "internalType": "bool",
			  "name": "_allowUserCloseOnly",
			  "type": "bool"
			}
		  ],
		  "name": "setAllowUserCloseOnly",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "address",
			  "name": "_manager",
			  "type": "address"
			},
			{
			  "internalType": "bool",
			  "name": "_isActive",
			  "type": "bool"
			}
		  ],
		  "name": "setApprovedRouter",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "uint256",
			  "name": "_minBlockDelayKeeper",
			  "type": "uint256"
			},
			{
			  "internalType": "uint256",
			  "name": "_minTimeExecuteDelayPublic",
			  "type": "uint256"
			},
			{
			  "internalType": "uint256",
			  "name": "_minTimeCancelDelayPublic",
			  "type": "uint256"
			},
			{
			  "internalType": "uint256",
			  "name": "_maxTimeDelay",
			  "type": "uint256"
			}
		  ],
		  "name": "setDelayValues",
		  "outputs": [],
		  "stateMutability": "nonpayable",
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
			  "internalType": "bool",
			  "name": "_isUserCancelEnabled",
			  "type": "bool"
			}
		  ],
		  "name": "setIsUserCancelEnabled",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "bool",
			  "name": "_isUserExecuteEnabled",
			  "type": "bool"
			}
		  ],
		  "name": "setIsUserExecuteEnabled",
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
			  "name": "_account",
			  "type": "address"
			},
			{
			  "internalType": "bool",
			  "name": "_isActive",
			  "type": "bool"
			}
		  ],
		  "name": "setPositionKeeper",
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
			  "name": "_increasePositionRequestKeysStart",
			  "type": "uint256"
			},
			{
			  "internalType": "uint256",
			  "name": "_decreasePositionRequestKeysStart",
			  "type": "uint256"
			}
		  ],
		  "name": "setRequestKeysStartValues",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "stateMutability": "payable",
		  "type": "receive"
		}
	  ]
}