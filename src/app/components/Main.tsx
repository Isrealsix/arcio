import React from 'react';
import styles from '@/app/components/styles/page.module.css';

import { CiGrid41, CiWallet } from 'react-icons/ci';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FiBookOpen, FiMoreHorizontal } from 'react-icons/fi';
import { HiOutlineViewGridAdd } from 'react-icons/hi';
import { IoIosRefresh, IoMdLogIn } from 'react-icons/io';
import { TbArrowGuideFilled } from 'react-icons/tb';
import { PiChatDotsLight } from 'react-icons/pi';
import { contentConfig } from '@/app/config/config';
import { AppConfig, IconName, IIconComponent } from '@/app/types';

const DEFAULT_ICON_SIZE = 16;

const iconComponents = {
	CiGrid41: (props: IIconComponent) => <CiGrid41 {...props} />,
	CiWallet: (props: IIconComponent) => <CiWallet {...props} />,
	FiMoreHorizontal: (props: IIconComponent) => <FiMoreHorizontal {...props} />,
	FiBookOpen: (props: IIconComponent) => <FiBookOpen {...props} />,
	HiOutlineViewGridAdd: (props: IIconComponent) => (
		<HiOutlineViewGridAdd {...props} />
	),
	TbArrowGuideFilled: (props: IIconComponent) => (
		<TbArrowGuideFilled {...props} />
	),
	FaExternalLinkAlt: (props: IIconComponent) => (
		<FaExternalLinkAlt {...props} />
	),
	IoIosRefresh: (props: IIconComponent) => <IoIosRefresh {...props} />,
	IoMdLogIn: (props: IIconComponent) => <IoMdLogIn {...props} />,
	PiChatDotsLight: (props: IIconComponent) => <PiChatDotsLight {...props} />,
};

const renderIcon = (
	iconName: IconName,
	color?: string,
	size: number = DEFAULT_ICON_SIZE
) => {
	const IconComponent: React.FC<IIconComponent> = iconComponents[iconName];
	return IconComponent ? (
		<IconComponent size={size} color={color ?? ''} />
	) : null;
};

function Main() {
	const { dashboard } = contentConfig as AppConfig;
	return (
		<div className={styles.mainContent}>
			{/* Top Bar */}
			<div className={styles.topBar}>
				<div className={styles.topBarLeft}>
					<div className={styles.topBarTitle}>
						<div className={styles.topBarIcon}>
							<CiGrid41 size={20} color="#f97316" />
						</div>
						<span className={styles.topBarTitleText}>{dashboard.title}</span>
					</div>
				</div>
				<button className={styles.connectWalletBtn}>
					{renderIcon(dashboard.buttons.connect.icon)}
					<span>{dashboard.buttons.connect.label}</span>
				</button>
			</div>

			{/* Main Dashboard Content */}
			<div className={styles.dashboardContent}>
				{/* Background Pattern */}
				<div className={styles.backgroundPattern}>
					{Array.from({ length: 32 }).map((_, i) => (
						<div key={i} className={styles.patternItem}></div>
					))}
				</div>

				{/* Content */}
				<div className={styles.content}>
					<h1 className={styles.mainTitle}>{dashboard.status.title}</h1>
					<p className={styles.mainSubtitle}>{dashboard.status.description}</p>

					<div className={styles.troubleshootingCard}>
						<h2 className={styles.cardTitle}>
							{dashboard.troubleshooting.title}
						</h2>

						<div className={styles.stepsList}>
							{dashboard.troubleshooting.steps.map((step, index) => (
								<div key={index} className={styles.step}>
									<div className={styles.stepNumber}>{index + 1}</div>
									<p className={styles.stepText}>{step}</p>
								</div>
							))}
						</div>

						<div className={styles.buttonContainer}>
							<button className={styles.primaryButton}>
								{renderIcon(dashboard.buttons.install.icon, '#ea580c')}
								<span>{dashboard.buttons.install.label}</span>
							</button>

							<button className={styles.secondaryButton}>
								{renderIcon(dashboard.buttons.refresh.icon, '#ea580c')}
								<span>{dashboard.buttons.refresh.label}</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Main;
