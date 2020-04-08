var Spacedrop = {
  "contractName": "Spacedrop",
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "token",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "sender",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "recipient",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "tokensToTransfer",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "nonce",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "iface",
          "type": "uint256"
        }
      ],
      "name": "Sent",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "token",
          "type": "address"
        },
        {
          "name": "sender",
          "type": "address"
        },
        {
          "name": "recipient",
          "type": "address"
        },
        {
          "name": "nonce",
          "type": "uint256"
        }
      ],
      "name": "claimTokensERC20",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.4.18+commit.9cf6e910\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":false,\"inputs\":[{\"name\":\"token\",\"type\":\"address\"},{\"name\":\"sender\",\"type\":\"address\"},{\"name\":\"recipient\",\"type\":\"address\"},{\"name\":\"nonce\",\"type\":\"uint256\"}],\"name\":\"claimTokensERC20\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"token\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"sender\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"recipient\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"tokensToTransfer\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"nonce\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"iface\",\"type\":\"uint256\"}],\"name\":\"Sent\",\"type\":\"event\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/D/environments/spacedrop/contracts/Spacedrop.sol\":\"Spacedrop\"},\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/D/environments/spacedrop/contracts/Spacedrop.sol\":{\"keccak256\":\"0xa44a3877abf44be7e0bc341ac93cf3878b0d05bd24db17db78ad78bf8fe1758f\",\"urls\":[\"bzzr://fde6dc8fea5539aad6d7d9c3729a8fab001ea159b3d7ef09681057e1506f0e2e\"]},\"/D/environments/spacedrop/node_modules/zeppelin-solidity/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0xd0b7ada654221cc9e4cb4a97754b99d2e7c2fb824303f1ba5f1661f4e8086751\",\"urls\":[\"bzzr://95e6edb880940b6e1182c30f97e674a3598768fca1607d9fa145840ec3dddf97\"]},\"/D/environments/spacedrop/node_modules/zeppelin-solidity/contracts/token/ERC20/ERC20Basic.sol\":{\"keccak256\":\"0x1fd84910b5033c9d169995cd88bdd465d37d4a384ef2837b238b88cd26ef74e7\",\"urls\":[\"bzzr://620436dae6ea9102dd7372bf01ceb67d052c3a02d8b23a5d1648bd48a99edf62\"]},\"/D/environments/spacedrop/node_modules/zeppelin-solidity/contracts/token/ERC20/SafeERC20.sol\":{\"keccak256\":\"0x2e3e5732b2cd547729f722696bb0e4c05a681b2a02f2c5c76a9e2f912fc614f1\",\"urls\":[\"bzzr://9ca8e5395cda34bb3d628bb1bbbf62c7dde91e10971e9465ca7b150945fcebb2\"]}},\"version\":1}",
  "bytecode": "0x6060604052341561000f57600080fd5b61040d8061001e6000396000f300606060405260043610610041576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680633d3a152f14610046575b600080fd5b341561005157600080fd5b6100c4600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506100c6565b005b6000848484604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014019350505050604051809103902090506101aa8161026f565b6101d984846103e88873ffffffffffffffffffffffffffffffffffffffff166102d9909392919063ffffffff16565b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff167ffcd400187065ed4700064f858ec3ae800ba90796a5ed85d720e1d588ab27fd046103e886601460405180848152602001838152602001828152602001935050505060405180910390a45050505050565b600080826000191660001916815260200190815260200160002060009054906101000a900460ff161515156102a357600080fd5b6001600080836000191660001916815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b8373ffffffffffffffffffffffffffffffffffffffff166323b872dd8484846000604051602001526040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b15156103b857600080fd5b6102c65a03f115156103c957600080fd5b5050506040518051905015156103db57fe5b505050505600a165627a7a7230582068e189e09520d53716e54a15f287b9e41ff4fd133489f3cabcbed393bced3b930029",
  "deployedBytecode": "0x606060405260043610610041576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680633d3a152f14610046575b600080fd5b341561005157600080fd5b6100c4600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506100c6565b005b6000848484604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014019350505050604051809103902090506101aa8161026f565b6101d984846103e88873ffffffffffffffffffffffffffffffffffffffff166102d9909392919063ffffffff16565b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff167ffcd400187065ed4700064f858ec3ae800ba90796a5ed85d720e1d588ab27fd046103e886601460405180848152602001838152602001828152602001935050505060405180910390a45050505050565b600080826000191660001916815260200190815260200160002060009054906101000a900460ff161515156102a357600080fd5b6001600080836000191660001916815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b8373ffffffffffffffffffffffffffffffffffffffff166323b872dd8484846000604051602001526040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b15156103b857600080fd5b6102c65a03f115156103c957600080fd5b5050506040518051905015156103db57fe5b505050505600a165627a7a7230582068e189e09520d53716e54a15f287b9e41ff4fd133489f3cabcbed393bced3b930029",
  "sourceMap": "190:665:1:-;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "190:665:1:-;;;;;;;;;;;;;;;;;;;;;;;;543:307;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;648:9;670:5;677:6;685:9;660:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;648:47;;702:27;727:1;702:24;:27::i;:::-;736:54;766:6;774:9;785:4;742:5;736:29;;;;:54;;;;;;:::i;:::-;817:9;797:47;;809:6;797:47;;802:5;797:47;;;828:4;834:5;841:2;797:47;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;543:307;;;;;:::o;428:109::-;502:4;:7;507:1;502:7;;;;;;;;;;;;;;;;;;;;;;;;;;;501:8;493:17;;;;;;;;527:4;517;:7;522:1;517:7;;;;;;;;;;;;;;;;;;:14;;;;;;;;;;;;;;;;;;428:109;:::o;492:143:7:-;594:5;:18;;;613:4;619:2;623:5;594:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;587:43;;;;;;492:143;;;;:::o",
  "source": "pragma solidity ^0.4.18;\r\n\r\nimport \"../node_modules/zeppelin-solidity/contracts/token/ERC20/ERC20.sol\";\r\nimport \"../node_modules/zeppelin-solidity/contracts/token/ERC20/SafeERC20.sol\";\r\n\r\n\r\ncontract Spacedrop {\r\n  using SafeERC20 for ERC20;\r\n\r\n  mapping (bytes32 => bool) used;\r\n  event Sent(address indexed token, address indexed sender, address indexed recipient, uint256 tokensToTransfer, uint256 nonce, uint256 iface);\r\n\r\n  function validateAndRegisterClaim(bytes32 h) internal {\r\n  \r\n    require(!used[h]);\r\n    used[h] = true;\r\n  }\r\n\r\n  function claimTokensERC20(address token, address sender, address recipient, uint256 nonce) public {\r\n    bytes32 h = keccak256(token, sender, recipient);\r\n    validateAndRegisterClaim(h);\r\n    ERC20(token).safeTransferFrom(sender, recipient, 1000);\r\n    Sent(token, sender, recipient, 1000, nonce, 20);\r\n  }\r\n\r\n}\r\n",
  "sourcePath": "D:\\environments\\spacedrop\\contracts\\Spacedrop.sol",
  "ast": {
    "absolutePath": "/D/environments/spacedrop/contracts/Spacedrop.sol",
    "exportedSymbols": {
      "Spacedrop": [
        143
      ]
    },
    "id": 144,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 58,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".18"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:1"
      },
      {
        "absolutePath": "/D/environments/spacedrop/node_modules/zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
        "file": "../node_modules/zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
        "id": 59,
        "nodeType": "ImportDirective",
        "scope": 144,
        "sourceUnit": 406,
        "src": "28:75:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/D/environments/spacedrop/node_modules/zeppelin-solidity/contracts/token/ERC20/SafeERC20.sol",
        "file": "../node_modules/zeppelin-solidity/contracts/token/ERC20/SafeERC20.sol",
        "id": 60,
        "nodeType": "ImportDirective",
        "scope": 144,
        "sourceUnit": 500,
        "src": "105:79:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 143,
        "linearizedBaseContracts": [
          143
        ],
        "name": "Spacedrop",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 63,
            "libraryName": {
              "contractScope": null,
              "id": 61,
              "name": "SafeERC20",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 499,
              "src": "220:9:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeERC20_$499",
                "typeString": "library SafeERC20"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "214:26:1",
            "typeName": {
              "contractScope": null,
              "id": 62,
              "name": "ERC20",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 405,
              "src": "234:5:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20_$405",
                "typeString": "contract ERC20"
              }
            }
          },
          {
            "constant": false,
            "id": 67,
            "name": "used",
            "nodeType": "VariableDeclaration",
            "scope": 143,
            "src": "246:30:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
              "typeString": "mapping(bytes32 => bool)"
            },
            "typeName": {
              "id": 66,
              "keyType": {
                "id": 64,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "255:7:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "nodeType": "Mapping",
              "src": "246:25:1",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
                "typeString": "mapping(bytes32 => bool)"
              },
              "valueType": {
                "id": 65,
                "name": "bool",
                "nodeType": "ElementaryTypeName",
                "src": "266:4:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "anonymous": false,
            "id": 81,
            "name": "Sent",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 80,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 69,
                  "indexed": true,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 81,
                  "src": "292:21:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 68,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "292:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 71,
                  "indexed": true,
                  "name": "sender",
                  "nodeType": "VariableDeclaration",
                  "scope": 81,
                  "src": "315:22:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 70,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "315:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 73,
                  "indexed": true,
                  "name": "recipient",
                  "nodeType": "VariableDeclaration",
                  "scope": 81,
                  "src": "339:25:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 72,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "339:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 75,
                  "indexed": false,
                  "name": "tokensToTransfer",
                  "nodeType": "VariableDeclaration",
                  "scope": 81,
                  "src": "366:24:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 74,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "366:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 77,
                  "indexed": false,
                  "name": "nonce",
                  "nodeType": "VariableDeclaration",
                  "scope": 81,
                  "src": "392:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 76,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "392:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 79,
                  "indexed": false,
                  "name": "iface",
                  "nodeType": "VariableDeclaration",
                  "scope": 81,
                  "src": "407:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 78,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "407:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "291:130:1"
            },
            "src": "281:141:1"
          },
          {
            "body": {
              "id": 99,
              "nodeType": "Block",
              "src": "482:55:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 90,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "501:8:1",
                        "subExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 87,
                            "name": "used",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67,
                            "src": "502:4:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
                              "typeString": "mapping(bytes32 => bool)"
                            }
                          },
                          "id": 89,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 88,
                            "name": "h",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 83,
                            "src": "507:1:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "502:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 86,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 760,
                      "src": "493:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 91,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "493:17:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 92,
                  "nodeType": "ExpressionStatement",
                  "src": "493:17:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 97,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 93,
                        "name": "used",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67,
                        "src": "517:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
                          "typeString": "mapping(bytes32 => bool)"
                        }
                      },
                      "id": 95,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 94,
                        "name": "h",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 83,
                        "src": "522:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "517:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 96,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "527:4:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "517:14:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 98,
                  "nodeType": "ExpressionStatement",
                  "src": "517:14:1"
                }
              ]
            },
            "id": 100,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "validateAndRegisterClaim",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 84,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 83,
                  "name": "h",
                  "nodeType": "VariableDeclaration",
                  "scope": 100,
                  "src": "462:9:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 82,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "462:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "461:11:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 85,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "482:0:1"
            },
            "scope": 143,
            "src": "428:109:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 141,
              "nodeType": "Block",
              "src": "641:209:1",
              "statements": [
                {
                  "assignments": [
                    112
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 112,
                      "name": "h",
                      "nodeType": "VariableDeclaration",
                      "scope": 142,
                      "src": "648:9:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 111,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "648:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 118,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 114,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 102,
                        "src": "670:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 115,
                        "name": "sender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 104,
                        "src": "677:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 116,
                        "name": "recipient",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 106,
                        "src": "685:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 113,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 751,
                      "src": "660:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                        "typeString": "function () pure returns (bytes32)"
                      }
                    },
                    "id": 117,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "660:35:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "648:47:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 120,
                        "name": "h",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 112,
                        "src": "727:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 119,
                      "name": "validateAndRegisterClaim",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 100,
                      "src": "702:24:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bytes32_$returns$__$",
                        "typeString": "function (bytes32)"
                      }
                    },
                    "id": 121,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "702:27:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 122,
                  "nodeType": "ExpressionStatement",
                  "src": "702:27:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 127,
                        "name": "sender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 104,
                        "src": "766:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 128,
                        "name": "recipient",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 106,
                        "src": "774:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "31303030",
                        "id": 129,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "785:4:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1000_by_1",
                          "typeString": "int_const 1000"
                        },
                        "value": "1000"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_rational_1000_by_1",
                          "typeString": "int_const 1000"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 124,
                            "name": "token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 102,
                            "src": "742:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 123,
                          "name": "ERC20",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 405,
                          "src": "736:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_ERC20_$405_$",
                            "typeString": "type(contract ERC20)"
                          }
                        },
                        "id": 125,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "736:12:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ERC20_$405",
                          "typeString": "contract ERC20"
                        }
                      },
                      "id": 126,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "safeTransferFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 480,
                      "src": "736:29:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_ERC20_$405_$_t_address_$_t_address_$_t_uint256_$returns$__$bound_to$_t_contract$_ERC20_$405_$",
                        "typeString": "function (contract ERC20,address,address,uint256)"
                      }
                    },
                    "id": 130,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "736:54:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 131,
                  "nodeType": "ExpressionStatement",
                  "src": "736:54:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 133,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 102,
                        "src": "802:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 134,
                        "name": "sender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 104,
                        "src": "809:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 135,
                        "name": "recipient",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 106,
                        "src": "817:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "31303030",
                        "id": 136,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "828:4:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1000_by_1",
                          "typeString": "int_const 1000"
                        },
                        "value": "1000"
                      },
                      {
                        "argumentTypes": null,
                        "id": 137,
                        "name": "nonce",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 108,
                        "src": "834:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "3230",
                        "id": 138,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "841:2:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_20_by_1",
                          "typeString": "int_const 20"
                        },
                        "value": "20"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_rational_1000_by_1",
                          "typeString": "int_const 1000"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_rational_20_by_1",
                          "typeString": "int_const 20"
                        }
                      ],
                      "id": 132,
                      "name": "Sent",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 81,
                      "src": "797:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,address,uint256,uint256,uint256)"
                      }
                    },
                    "id": 139,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "797:47:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 140,
                  "nodeType": "ExpressionStatement",
                  "src": "797:47:1"
                }
              ]
            },
            "id": 142,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "claimTokensERC20",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 109,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 102,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 142,
                  "src": "569:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 101,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "569:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 104,
                  "name": "sender",
                  "nodeType": "VariableDeclaration",
                  "scope": 142,
                  "src": "584:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 103,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "584:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 106,
                  "name": "recipient",
                  "nodeType": "VariableDeclaration",
                  "scope": 142,
                  "src": "600:17:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 105,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "600:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 108,
                  "name": "nonce",
                  "nodeType": "VariableDeclaration",
                  "scope": 142,
                  "src": "619:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 107,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "619:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "568:65:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 110,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "641:0:1"
            },
            "scope": 143,
            "src": "543:307:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 144,
        "src": "190:665:1"
      }
    ],
    "src": "0:857:1"
  },
  "legacyAST": {
    "absolutePath": "/D/environments/spacedrop/contracts/Spacedrop.sol",
    "exportedSymbols": {
      "Spacedrop": [
        143
      ]
    },
    "id": 144,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 58,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".18"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:1"
      },
      {
        "absolutePath": "/D/environments/spacedrop/node_modules/zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
        "file": "../node_modules/zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
        "id": 59,
        "nodeType": "ImportDirective",
        "scope": 144,
        "sourceUnit": 406,
        "src": "28:75:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/D/environments/spacedrop/node_modules/zeppelin-solidity/contracts/token/ERC20/SafeERC20.sol",
        "file": "../node_modules/zeppelin-solidity/contracts/token/ERC20/SafeERC20.sol",
        "id": 60,
        "nodeType": "ImportDirective",
        "scope": 144,
        "sourceUnit": 500,
        "src": "105:79:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 143,
        "linearizedBaseContracts": [
          143
        ],
        "name": "Spacedrop",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 63,
            "libraryName": {
              "contractScope": null,
              "id": 61,
              "name": "SafeERC20",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 499,
              "src": "220:9:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeERC20_$499",
                "typeString": "library SafeERC20"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "214:26:1",
            "typeName": {
              "contractScope": null,
              "id": 62,
              "name": "ERC20",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 405,
              "src": "234:5:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20_$405",
                "typeString": "contract ERC20"
              }
            }
          },
          {
            "constant": false,
            "id": 67,
            "name": "used",
            "nodeType": "VariableDeclaration",
            "scope": 143,
            "src": "246:30:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
              "typeString": "mapping(bytes32 => bool)"
            },
            "typeName": {
              "id": 66,
              "keyType": {
                "id": 64,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "255:7:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "nodeType": "Mapping",
              "src": "246:25:1",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
                "typeString": "mapping(bytes32 => bool)"
              },
              "valueType": {
                "id": 65,
                "name": "bool",
                "nodeType": "ElementaryTypeName",
                "src": "266:4:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "anonymous": false,
            "id": 81,
            "name": "Sent",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 80,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 69,
                  "indexed": true,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 81,
                  "src": "292:21:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 68,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "292:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 71,
                  "indexed": true,
                  "name": "sender",
                  "nodeType": "VariableDeclaration",
                  "scope": 81,
                  "src": "315:22:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 70,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "315:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 73,
                  "indexed": true,
                  "name": "recipient",
                  "nodeType": "VariableDeclaration",
                  "scope": 81,
                  "src": "339:25:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 72,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "339:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 75,
                  "indexed": false,
                  "name": "tokensToTransfer",
                  "nodeType": "VariableDeclaration",
                  "scope": 81,
                  "src": "366:24:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 74,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "366:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 77,
                  "indexed": false,
                  "name": "nonce",
                  "nodeType": "VariableDeclaration",
                  "scope": 81,
                  "src": "392:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 76,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "392:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 79,
                  "indexed": false,
                  "name": "iface",
                  "nodeType": "VariableDeclaration",
                  "scope": 81,
                  "src": "407:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 78,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "407:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "291:130:1"
            },
            "src": "281:141:1"
          },
          {
            "body": {
              "id": 99,
              "nodeType": "Block",
              "src": "482:55:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 90,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "501:8:1",
                        "subExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 87,
                            "name": "used",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67,
                            "src": "502:4:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
                              "typeString": "mapping(bytes32 => bool)"
                            }
                          },
                          "id": 89,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 88,
                            "name": "h",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 83,
                            "src": "507:1:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "502:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 86,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 760,
                      "src": "493:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 91,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "493:17:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 92,
                  "nodeType": "ExpressionStatement",
                  "src": "493:17:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 97,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 93,
                        "name": "used",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67,
                        "src": "517:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
                          "typeString": "mapping(bytes32 => bool)"
                        }
                      },
                      "id": 95,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 94,
                        "name": "h",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 83,
                        "src": "522:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "517:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 96,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "527:4:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "517:14:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 98,
                  "nodeType": "ExpressionStatement",
                  "src": "517:14:1"
                }
              ]
            },
            "id": 100,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "validateAndRegisterClaim",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 84,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 83,
                  "name": "h",
                  "nodeType": "VariableDeclaration",
                  "scope": 100,
                  "src": "462:9:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 82,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "462:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "461:11:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 85,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "482:0:1"
            },
            "scope": 143,
            "src": "428:109:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 141,
              "nodeType": "Block",
              "src": "641:209:1",
              "statements": [
                {
                  "assignments": [
                    112
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 112,
                      "name": "h",
                      "nodeType": "VariableDeclaration",
                      "scope": 142,
                      "src": "648:9:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 111,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "648:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 118,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 114,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 102,
                        "src": "670:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 115,
                        "name": "sender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 104,
                        "src": "677:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 116,
                        "name": "recipient",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 106,
                        "src": "685:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 113,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 751,
                      "src": "660:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                        "typeString": "function () pure returns (bytes32)"
                      }
                    },
                    "id": 117,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "660:35:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "648:47:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 120,
                        "name": "h",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 112,
                        "src": "727:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 119,
                      "name": "validateAndRegisterClaim",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 100,
                      "src": "702:24:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bytes32_$returns$__$",
                        "typeString": "function (bytes32)"
                      }
                    },
                    "id": 121,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "702:27:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 122,
                  "nodeType": "ExpressionStatement",
                  "src": "702:27:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 127,
                        "name": "sender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 104,
                        "src": "766:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 128,
                        "name": "recipient",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 106,
                        "src": "774:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "31303030",
                        "id": 129,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "785:4:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1000_by_1",
                          "typeString": "int_const 1000"
                        },
                        "value": "1000"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_rational_1000_by_1",
                          "typeString": "int_const 1000"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 124,
                            "name": "token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 102,
                            "src": "742:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 123,
                          "name": "ERC20",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 405,
                          "src": "736:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_ERC20_$405_$",
                            "typeString": "type(contract ERC20)"
                          }
                        },
                        "id": 125,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "736:12:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ERC20_$405",
                          "typeString": "contract ERC20"
                        }
                      },
                      "id": 126,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "safeTransferFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 480,
                      "src": "736:29:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_ERC20_$405_$_t_address_$_t_address_$_t_uint256_$returns$__$bound_to$_t_contract$_ERC20_$405_$",
                        "typeString": "function (contract ERC20,address,address,uint256)"
                      }
                    },
                    "id": 130,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "736:54:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 131,
                  "nodeType": "ExpressionStatement",
                  "src": "736:54:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 133,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 102,
                        "src": "802:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 134,
                        "name": "sender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 104,
                        "src": "809:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 135,
                        "name": "recipient",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 106,
                        "src": "817:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "31303030",
                        "id": 136,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "828:4:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1000_by_1",
                          "typeString": "int_const 1000"
                        },
                        "value": "1000"
                      },
                      {
                        "argumentTypes": null,
                        "id": 137,
                        "name": "nonce",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 108,
                        "src": "834:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "3230",
                        "id": 138,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "841:2:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_20_by_1",
                          "typeString": "int_const 20"
                        },
                        "value": "20"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_rational_1000_by_1",
                          "typeString": "int_const 1000"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_rational_20_by_1",
                          "typeString": "int_const 20"
                        }
                      ],
                      "id": 132,
                      "name": "Sent",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 81,
                      "src": "797:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,address,uint256,uint256,uint256)"
                      }
                    },
                    "id": 139,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "797:47:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 140,
                  "nodeType": "ExpressionStatement",
                  "src": "797:47:1"
                }
              ]
            },
            "id": 142,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "claimTokensERC20",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 109,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 102,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 142,
                  "src": "569:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 101,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "569:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 104,
                  "name": "sender",
                  "nodeType": "VariableDeclaration",
                  "scope": 142,
                  "src": "584:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 103,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "584:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 106,
                  "name": "recipient",
                  "nodeType": "VariableDeclaration",
                  "scope": 142,
                  "src": "600:17:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 105,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "600:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 108,
                  "name": "nonce",
                  "nodeType": "VariableDeclaration",
                  "scope": 142,
                  "src": "619:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 107,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "619:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "568:65:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 110,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "641:0:1"
            },
            "scope": 143,
            "src": "543:307:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 144,
        "src": "190:665:1"
      }
    ],
    "src": "0:857:1"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {
    "5777": {
      "events": {
        "0xe9baa9cd6123e3a8e3c7eb87abf18c81b426473f4530382eec740fd0f0b5be7c": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "token",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "sender",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "recipient",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "tokensToTransfer",
              "type": "uint256"
            }
          ],
          "name": "Sent",
          "type": "event"
        },
        "0xfcd400187065ed4700064f858ec3ae800ba90796a5ed85d720e1d588ab27fd04": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "token",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "sender",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "recipient",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "tokensToTransfer",
              "type": "uint256"
            },
            {
              "indexed": false,
              "name": "nonce",
              "type": "uint256"
            },
            {
              "indexed": false,
              "name": "iface",
              "type": "uint256"
            }
          ],
          "name": "Sent",
          "type": "event"
        }
      },
      "links": {},
      "address": "0x417ED26A4B936d127E95f884953C41D613300C84",
      "transactionHash": "0x9ef2b139ec36e898fd15a5fa068ffb96a2755d89c64375778d5110c5f284d086"
    }
  },
  "schemaVersion": "3.0.23",
  "updatedAt": "2020-04-07T20:49:21.164Z",
  "networkType": "ethereum",
  "devdoc": {
    "methods": {}
  },
  "userdoc": {
    "methods": {}
  }
}