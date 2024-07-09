import { Switch as SwitchAntd } from "antd";
import AntdProvider from "../theme/antd.provider";
import { SwitchProps } from "../interface/SwitchProps";

export function Switch(props: SwitchProps): any {
    return (
        <AntdProvider>
            <div className="bg-slate-200 w-max rounded-full flex justify-center items-center">
                <SwitchAntd {...props} />
            </div>
        </AntdProvider>
    );
}