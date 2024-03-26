import CardComponentDetail from "@/components/card/CardComponentDetail";

type PropsParams = {
    params: {
        id: number;
    };
    searchParams: any
};

const ENDPOINT = "https://fakestoreapi.com/products/";

const getData = async (id:number) => {
    const res = await fetch(`${ENDPOINT}${id}`);
    const data = await res.json();
    return data;
}

export default async function Detail(props: PropsParams) {
    const data = await getData(props.params.id);
    return (
        <div>
            <div className="h-screen grid place-content-center">
                <CardComponentDetail title={data?.title || "No title"} image={data?.image || "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="} description={data?.description || "No description"}/>
            </div>
        </div>
    );
}