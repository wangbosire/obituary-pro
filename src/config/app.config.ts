import LogoImage from '../assets/images/logo.png'

interface IAppConfigType {
  logo?: typeof LogoImage
}

const AppConfig: IAppConfigType = {
  logo: LogoImage
}

export default AppConfig