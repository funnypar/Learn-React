import supabase from "./supabase";

export async function getCabins() {
    const { data, error } = await supabase.from("cabins").select("*");

    if (error) {
        console.log(error);
        throw new Error("Could not read Cabins");
    }

    return data;
}

export async function createCabin(newCabin) {
    const { data, error } = await supabase
        .from("cabins")
        .insert([
            {
                name: newCabin.name,
                "max-capacity": +newCabin.maxCapacity,
                "regular-price": +newCabin.regularPrice,
                discount: +newCabin.discount,
                description: newCabin.description,
            },
        ])
        .select();
    if (error) {
        console.log(error);
        throw new Error("Could not create Cabins");
    }

    return data;
}
export async function deleteCabins(id) {
    const { error } = await supabase.from("cabins").delete().eq("id", id);

    if (error) {
        console.log(error);
        throw new Error("Could not delete Cabins");
    }
}
