import React from 'react';
import Header from './header';
import { AppConfig, IconName, IIconComponent } from '../types';
import { CiGrid41, CiWallet } from 'react-icons/ci';
import { FiBookOpen, FiMoreHorizontal } from 'react-icons/fi';
import { HiOutlineViewGridAdd } from 'react-icons/hi';
import { TbArrowGuideFilled } from 'react-icons/tb';
import { FaChevronDown, FaChevronUp, FaExternalLinkAlt } from 'react-icons/fa';
import { IoIosRefresh, IoMdLogIn } from 'react-icons/io';
import { PiChatDotsLight } from 'react-icons/pi';
import styles from '@/app/components/styles/page.module.css';
import { contentConfig } from '../config/config';


const DEFAULT_ICON_SIZE = 16;

const iconComponents = {
  CiGrid41: (props: IIconComponent) => <CiGrid41 {...props} />,
  CiWallet: (props: IIconComponent) => <CiWallet {...props} />,
  FiMoreHorizontal: (props: IIconComponent) => <FiMoreHorizontal {...props} />,
  FiBookOpen: (props: IIconComponent) => <FiBookOpen {...props} />,
  HiOutlineViewGridAdd: (props: IIconComponent) => <HiOutlineViewGridAdd {...props} />,
  TbArrowGuideFilled: (props: IIconComponent) => <TbArrowGuideFilled {...props} />,
  FaExternalLinkAlt: (props: IIconComponent) => <FaExternalLinkAlt {...props} />,
  IoIosRefresh: (props: IIconComponent) => <IoIosRefresh {...props} />,
  IoMdLogIn: (props: IIconComponent) => <IoMdLogIn {...props} />,
  PiChatDotsLight: (props: IIconComponent) => <PiChatDotsLight {...props} />
};

const renderIcon = (iconName: IconName, color?: string, size: number = DEFAULT_ICON_SIZE) => {
  const IconComponent: React.FC<IIconComponent> = iconComponents[iconName];
  return IconComponent ? <IconComponent size={size} color={color ?? ''} /> : null;
};


function Panel() {
  const { navigation } = contentConfig as AppConfig;
	return (
		<div>
			<Header />

			<nav className={styles.nav}>
				{navigation.items.map(item => (
					<React.Fragment key={item.id}>
						<div
							className={`${styles.navItem} ${
								item.active ? styles.navItemActive : ''
							} ${item.hasChevron ? styles.navItemWithChevron : ''}`}
						>
							<div
								style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
							>
								{renderIcon(item.icon)}
								<span>{item.label}</span>
							</div>
							{item.hasChevron &&
								(item.chevronDirection === 'up' ? (
									<FaChevronUp size={DEFAULT_ICON_SIZE} />
								) : (
									<FaChevronDown size={DEFAULT_ICON_SIZE} />
								))}
						</div>

						{item.subItems && (
							<div className={styles.subNav}>
								{item.subItems.map(subItem => (
									<div
										key={subItem.id}
										className={`${styles.subNavItem} ${
											subItem.active ? styles.subNavItemActive : ''
										} ${subItem.hasChevron ? styles.navItemWithChevron : ''}`}
									>
										<div
											style={{
												display: 'flex',
												alignItems: 'center',
												gap: '12px',
											}}
										>
											{renderIcon(subItem.icon, subItem.color)}
											<span>{subItem.label}</span>
										</div>
										{subItem.hasChevron &&
											(subItem.chevronDirection === 'up' ? (
												<FaChevronUp size={DEFAULT_ICON_SIZE} />
											) : (
												<FaChevronDown size={DEFAULT_ICON_SIZE} />
											))}
									</div>
								))}
							</div>
						)}
					</React.Fragment>
				))}
			</nav>
		</div>
	);
}

export default Panel;
