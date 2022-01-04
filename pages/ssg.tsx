import {NextPage, NextPageContext} from "next";
import {useSession} from "next-auth/react";


const SSG: NextPage<{prop: string}> = ({prop}) => {
    const {status} = useSession()
    return (
        <>
            {status === 'authenticated' ? (
                <div>we are authenticated</div>
            ): (
                <div>not authenticated</div>
            )}
            <div>i am ssg {prop}</div>
        </>
    )
}

export async function getStaticProps(context: NextPageContext) {
    return {
        props: {
            prop: 'abc'
        }
    }
}

export default SSG;