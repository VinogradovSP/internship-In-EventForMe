import styles from '@/styles/main/Main.module.scss';

type MainTitleProps = {
  title: string;
  suptitle: string;
  children?: JSX.Element;
};

export function MainTitle({
  title,
  suptitle,
  children,
}: MainTitleProps): JSX.Element {
  return (
    <div className={styles.my64 + ' w-100 text-center'}>
      <p className={styles.main__suptitle}>{suptitle}</p>
      <h2 className={styles.main__title + ' mb-md-4 w-75 mx-auto'}>{title}</h2>
      {children}
    </div>
  );
}
