import LogoImage from '../assets/images/logo.png'

interface IAppConfigType {
  logo?: typeof LogoImage;
  title?: string
}

const AppConfig: IAppConfigType = {
  logo: LogoImage,
  title: '后台管理系统'
}

export default AppConfig
