import {ConfirmIcon} from "@/components/icons/FontAwesome";

type Props = {
    params: {
        key: string;
    };
    searchParams: any;
};

import style from './style.module.css';
import {FooterDivider} from "flowbite-react";
// import Button
export default function ConfirmEmail() {
    return (
        <main className={style.container}>
            {/*  Confirm Email Card  */}
            <section className="flex flex-col items-center">
                {/*  Icon Confirm  */}
                <ConfirmIcon color="#080" classname="h-44 w-44 mb-8"/>
                {/*  Title  */}
                <h1 className="text-6xl font-bold">
                    Email has been Confirmed
                </h1>
                <FooterDivider/>
                {/*  Description  */}
                <p className="text-3xl">
                    អ៊ីមែលរបស់អ្នកបានបញ្ជាក់ហើយ! អ្នកអាចចូលទៅទំព័រចូលដោយចុចលើប៊ូតុងខាងក្រោម!
                </p>
                <FooterDivider/>
                <p className="text-3xl">
                    Your email confirmed! you can go to login page by press below button!
                </p>
                {/*  Button  */}
            </section>
        </main>
    )
}