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
    // upload image
    const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
        "/",
        ""
    );

    const imagePath = `https://ljfhafwluvbjjdsaueni.supabase.co/storage/v1/object/public/cabin-images/${imageName}`;

    const { data, error } = await supabase
        .from("cabins")
        .insert([
            {
                name: newCabin.name,
                "max-capacity": +newCabin.maxCapacity,
                "regular-price": +newCabin.regularPrice,
                discount: +newCabin.discount,
                description: newCabin.description,
                image: imagePath,
            },
        ])
        .select();
    if (error) {
        console.log(error);
        throw new Error("Could not create Cabins");
    }

    // Upload Image
    const { error: storageError } = await supabase.storage
        .from("cabin-images")
        .upload(imageName, newCabin.image);

    // 3. Delete the cabin IF there was an error uplaoding image
    if (storageError) {
        await supabase.from("cabins").delete().eq("id", data.id);
        console.error(storageError);
        throw new Error(
            "Cabin image could not be uploaded and the cabin was not created"
        );
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
