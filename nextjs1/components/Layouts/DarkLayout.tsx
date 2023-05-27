import { FC, PropsWithChildren } from "react"



// FC se refiere a que es un functional component y le aclaramos que es una 
// prop con childrens
const DarkLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div style={{
            backgroundColor: "rgba(0,0,0,0.3)",
            padding: "10px",
            borderRadius: "5px"
        }}>
            <h3>Dark Layout</h3>
            <div>
                {children}
            </div>

        </div>
    )
}

export default DarkLayout