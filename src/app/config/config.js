
export const contentConfig = {
  appInfo: {
    name: "Matrix",
    byline: "by arc",
    tagline: "Your Privacy Shield for AI"
  },
  navigation: {
    items: [
      { id: 1, label: "Private Chat", icon: "PiChatDotsLight", active: true },
      { id: 2, label: "Wallet", icon: "CiWallet", active: true },
      { 
        id: 3, 
        label: "Advanced", 
        icon: "FiMoreHorizontal", 
        active: false,
        hasChevron: true,
        chevronDirection: "up",
        subItems: [
          { id: 31, label: "Dashboard", icon: "CiGrid41", active: true, color: '#f97316' },
          { id: 32, label: "Create Model", icon: "HiOutlineViewGridAdd", active: false, color: '#000' },
          { 
            id: 33, 
            label: "Model Management", 
            icon: "TbArrowGuideFilled", 
            active: false,
            hasChevron: true,
            chevronDirection: "down",
            color: '#000'
          }
        ]
      },
      { id: 4, label: "User Guide", icon: "FiBookOpen", active: false, color: '#000' }
    ]
  },
  dashboard: {
    title: "Dashboard",
    status: {
      title: "No Web3 Wallet Detected",
      description: "We couldn't detect MetaMask or another Web3 wallet in your browser."
    },
    troubleshooting: {
      title: "Troubleshooting Steps:",
      steps: [
        "Make sure MetaMask is installed and enabled",
        "Refresh this page after installing MetaMask",
        "Check if MetaMask is blocked by your browser",
        "Try disabling other wallet extensions temporarily"
      ]
    },
    buttons: {
      install: {
        label: "Install MetaMask",
        icon: "FaExternalLinkAlt"
      },
      refresh: {
        label: "Refresh page",
        icon: "IoIosRefresh"
      },
      connect: {
        label: "Connect Wallet",
        icon: "IoMdLogIn"
      }
    }
  }
};
