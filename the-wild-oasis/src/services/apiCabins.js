import supabase from "./supabase";

export async function getCabins() {
    const { data, error } = await supabase.from("cabins").select("*");

    if (!error) {
        console.log(data);
    } else {
        console.log(error);
        throw new Error("Could not read Cabins");
    }

    return data;
}
