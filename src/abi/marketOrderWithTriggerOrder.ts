export default {
	"abi": [
	  {
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
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
			"internalType": "uint256",
			"name": "_stopLossPrice",
			"type": "uint256"
		  },
		  {
			"internalType": "uint256",
			"name": "_takeProfitPrice",
			"type": "uint256"
		  }
		],
		"name": "createIncreasePositionWithCloseTriggerOrders",
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
			"internalType": "uint256",
			"name": "_stopLossPrice",
			"type": "uint256"
		  },
		  {
			"internalType": "uint256",
			"name": "_takeProfitPrice",
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
		  }
		],
		"name": "createIncreasePositionWithCloseTriggerOrdersDelegate",
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
			"internalType": "uint256",
			"name": "_stopLossPrice",
			"type": "uint256"
		  },
		  {
			"internalType": "uint256",
			"name": "_takeProfitPrice",
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
			"name": "_extraInfo",
			"type": "bytes"
		  }
		],
		"name": "createIncreasePositionWithCloseTriggerOrdersDelegateV3",
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
			"internalType": "uint256",
			"name": "_stopLossPrice",
			"type": "uint256"
		  },
		  {
			"internalType": "uint256",
			"name": "_takeProfitPrice",
			"type": "uint256"
		  },
		  {
			"internalType": "bytes",
			"name": "_extraInfo",
			"type": "bytes"
		  }
		],
		"name": "createIncreasePositionWithCloseTriggerOrdersV3",
		"outputs": [],
		"stateMutability": "payable",
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
		"inputs": [],
		"name": "minExecutionFees",
		"outputs": [
		  {
			"internalType": "uint256",
			"name": "positionRouterMinExecutionFee",
			"type": "uint256"
		  },
		  {
			"internalType": "uint256",
			"name": "orderBookMinExecutionFee",
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
		"name": "orderBook",
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
		"inputs": [],
		"name": "positionRouter",
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
			"name": "_kiloStorageAddr",
			"type": "address"
		  }
		],
		"name": "setKiloStorageAddr",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "_orderBook",
			"type": "address"
		  }
		],
		"name": "setOrderBook",
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
			"name": "_positionRouter",
			"type": "address"
		  }
		],
		"name": "setPositionRouter",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	  }
	]
  }
  
