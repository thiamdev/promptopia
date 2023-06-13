"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from "@components/Form";

const CreatePrompt = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    itemToSell: '',
    propertyType: '',
    saleType: '',
    sellerType: '',
    address: '',
    description: '',
    price: '',
    images: [],
    image: '',
    bedrooms: '',
    bathrooms: '',
    livingRooms: '',
    dispo: {
      wifi: false,
      pool: false,
      Mountain: false,
      Beach: false,
      Wifi: false,
      chef: false,
      Parking: false,
      camera: false,
      Wheelchair: false,
      Patio: false,
    },

    landSize: '',
    titleType: '',
    comments: []
  
  });

  const createPrompt = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("/api/prompt/new", {
        method: "POST",
        body: JSON.stringify({
          userId: session?.user.id,
          username: session?.user.name,
          itemToSell: formData?.itemToSell,
          propertyType: formData?.propertyType,
          saleType: formData?.saleType,
          sellerType: formData?.sellerType,
          address: formData?.address,
          description: formData?.description,
          price: formData?.price,
          images: formData?.images,
          image: session?.user.image,
          bedrooms: formData?.bedrooms,
          bathrooms: formData?.bathrooms,
          livingRooms: formData?.livingRooms,
          dispo: {
            wifi: formData?.wifi,
            pool: formData?.pool,
            Mountain: formData?.Mountain,
            Beach: formData?.Beach,
            chef: formData?.chef,
            Parking: formData?.Parking,
            camera: formData?.camera,
            Wheelchair: formData?.Wheelchair,
            Patio: formData?.Patio,
          },
          landSize: formData?.landSize,
          titleType: formData?.titleType,
          comments: formData?.comments
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form
      type="Create"
      formData={formData}
      setFormData={setFormData}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  );
};

export default CreatePrompt;
