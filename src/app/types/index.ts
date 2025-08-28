export interface IIconComponent {
  size: number
  color: string
}

export type IconName = 
  | 'CiGrid41' 
  | 'CiWallet' 
  | 'FiMoreHorizontal' 
  | 'FiBookOpen' 
  | 'HiOutlineViewGridAdd' 
  | 'TbArrowGuideFilled' 
  | 'FaExternalLinkAlt' 
  | 'IoIosRefresh' 
  | 'IoMdLogIn';

export interface NavigationItem {
  id: number;
  label: string;
  icon: IconName;
  active: boolean;
  hasChevron?: boolean;
  chevronDirection?: 'up' | 'down';
  color: string;
  subItems?: NavigationItem[];
}

export interface ButtonConfig {
  label: string;
  icon: IconName;
}

export interface AppConfig {
  appInfo: {
    name: string;
    byline: string;
    tagline: string;
  };
  navigation: {
    items: NavigationItem[];
  };
  dashboard: {
    title: string;
    status: {
      title: string;
      description: string;
    };
    troubleshooting: {
      title: string;
      steps: string[];
    };
    buttons: {
      install: ButtonConfig;
      refresh: ButtonConfig;
      connect: ButtonConfig;
    };
  };
}
