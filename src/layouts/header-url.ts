type HeaderMenuUrlType = {
    key: string;
    label: string
    url: string
}
const HeaderMenuUrl = [
    { key: 'conf', label: 'Config', url: '/dashboard?menu=config' },
    { key: 'mdm', label: 'Master Data Management', url: '/dashboard?menu=mdm' },
    { key: 'sls', label: 'Sales', url: '/eds/sales' },
    { key: 'log', label: 'Logistic', url: '/eds/logistic' },
    { key: 'fico', label: 'Finance', url: '/fico' },
    { key: 'mkt', label: 'Marketing', url: '/eds/marketing' },
    { key: 'proc', label: 'Procurement', url: '/proc' },
    { key: 'vim', label: 'VIM', url: '/vim' },
    { key: 'uct', label: 'Upload Center', url: '/uct/upload-center' },
]

export { HeaderMenuUrl };
export type { HeaderMenuUrlType };
