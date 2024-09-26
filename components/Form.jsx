'use client'
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";

import { AccessibilityIcon, CameraIcon, CarIcon, CheckCheckIcon, CheckCircle, ChefHatIcon, FileUp, MountainSnowIcon, MoveRight, MoveUpLeftIcon, Trash, UploadCloud, WavesIcon, WifiIcon, WindIcon } from "lucide-react"
import Image from 'next/image';
import Nav from './NavElse';

const Form = ({ formData, setFormData, submitting,  handleSubmit }) => {
  const [step, setStep] = useState(1);

  console.log(formData)


  const [errors, setErrors] = useState({});
  const validateStep = () => {
    let stepErrors = {};
    if (step === 1 && !formData.itemToSell) {
      stepErrors.itemToSell = 'Ce champ est requis';
    }
    if (step === 2 && !formData.propertyType) {
      stepErrors.propertyType = 'choisissez le type de proprieté';
    }
    if (step === 3 && !formData.saleType) {
      stepErrors.saleType = 'Ventre ou location';
    }
    if (step === 4 && !formData.sellerType) {
      stepErrors.sellerType = 'Entreprise ou particulier';
    }
    if (step === 5 && !formData.address) {
      stepErrors.address = "Veiller saisir l'adresse compléte";
    }
    if (step === 6 && !formData.description) {
      stepErrors.description = 'Renseigner la description exacte du bien';
    }
    if (step === 7 && !formData.price) {
      stepErrors.price = 'Combien sa coute';
    }
    if (step === 8 && formData.images.length !== 0) {
      stepErrors.images = 'Ajouter des images ';
    }
    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };


  const categorie = [
    {
      text: 'Mountain',
      icon: <MountainSnowIcon className='w-6 h-6 mx-auto' />
    },
    {
      text: 'Beach',
      icon: <WavesIcon className="w-6 h-6 mx-auto" />
    },
    {
      text: 'chef',
      icon: <ChefHatIcon className="w-6 h-6 mx-auto" />
    },
    {
      text: 'Wifi',
      icon: <WifiIcon className="w-6 h-6 mx-auto" />
    },
    {
      text: 'Parking',
      icon: <CarIcon className="w-6 h-6 mx-auto" />
    },
    {
      text: 'camera',
      icon: <CameraIcon className="w-6 h-6 mx-auto" />
    },
    {
      text: 'Wheelchair',
      icon: <AccessibilityIcon className="w-6 h-6 mx-auto" />
    },
    {
      text: 'Patio',
      icon: <WindIcon className="w-6 h-6 mx-auto" />
    },

  ]

  const handleClick = () => {
    if (validateStep()) {
      alert("les donner on été enrigistré avec succés")
    }

  }
  const handleNext = () => {
    if (validateStep()) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleCheckboxChange = (e) => {
    const { name } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      dispo: {
        ...prevFormData.dispo,
        [name]: !prevFormData.dispo[name],
      },
    }));
  };
  const handleDelete = (index) => {
    const newImages = formData.images.filter((_, i) => i !== index);
    setFormData({ ...formData, images: newImages })
  }

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const base64ImagesPromises = files.map(file => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
        reader.readAsDataURL(file);
      });
    });

    Promise.all(base64ImagesPromises)
      .then(base64Images => {
        setFormData({ ...formData, images: [...formData.images, ...base64Images] });
      })
      .catch(error => console.error('Error converting images to base64:', error));
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className=' transition-opacity'>
            <h1 className="text-1xl mb-4 font-semibold" >Que vouler vous vendre ?</h1>
            <Input
              type="text"
              name="itemToSell"
              placeholder="Trés belle maison à almadie"
              value={formData.itemToSell}
              onChange={handleInputChange}
              className="w-full p-3 py-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {!formData.itemToSell ? (
              <>
                {errors.itemToSell && <p className="text-white bg-red-500 py-3 my-4 px-4 rounded-md">{errors.itemToSell}</p>}

              </>

            ) : (
              <div></div>
            )}
          </div>

        );
      case 2:
        return (
          <div className=' transition-opacity'>
            <h1 className="text-1xl mb-4 font-semibold" >Type de propriété</h1>
            {!formData.propertyType ? (
              <>
                {errors.propertyType && <p className="text-white bg-red-500 py-3 my-4 px-4 rounded-md">{errors.propertyType}</p>}

              </>

            ) : (
              <div></div>
            )}
            <select
              name="propertyType"
              value={formData.propertyType}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >

              <span ></span>
              <option value="">Type de propriété</option>
              <option value="appartement" id='appart'>Appartement</option>
              <option value="maison" id='maison'>Maison</option>
              <option value="terrain" id='terrain'>Terrain</option>
              <option value="hotel" id='hotel'>Hôtel</option>
            </select>

            {(formData.propertyType === 'appartement' || formData.propertyType === 'maison' || formData.propertyType === 'hotel') && (
              <div className="mt-4 space-y-4">
                <div className='flex justify-between gap-2'>
                  <Input
                    type="number"
                    name="bedrooms"
                    placeholder="Nombre de chambres"
                    value={formData.bedrooms}
                    onChange={handleInputChange}
                    className="w-full p-3  py-6 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Input
                    type="number"
                    name="bathrooms"
                    placeholder="Nombre de salles de bain"
                    value={formData.bathrooms}
                    onChange={handleInputChange}
                    className="w-full p-3 py-6 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Input
                    type="number"
                    name="livingRooms"
                    placeholder="Nombre de salons"
                    value={formData.livingRooms}
                    onChange={handleInputChange}
                    className="w-full p-3 py-6 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="flex items-center space-x-4">
                  <div className='my-4 grid grid-cols-4 gap-3'>
                    {categorie.map((category) => (
                      <div key={category.text} className="flex items-center">
                        {/* Input Checkbox (caché) */}
                        <input
                          type="checkbox"
                          id={category.text}
                          name={category.text}
                          checked={formData.dispo[category.text]}
                          onChange={handleCheckboxChange}
                          className="hidden"
                        />

                        {/* Label cliquable */}
                        <label
                          htmlFor={category.text}
                          className={`className=" relative flex-row mx-auto text-center hover:border hover:border-orange-400 cursor-pointer items-center justify-center px-2 py-5 w-full rounded-md border border-gray-500 list-none gap-4"cursor-pointer p-3  ${formData.dispo[category.text] ? 'bg-slate-200 text-black' : 'bg-white text-gray-700'}`}
                        >
                          {formData.dispo[category.text] && (<CheckCircle className='w-4 h-4 absolute top-1 left-1' />)}
                          {category.icon}
                          {category.text}
                        </label>
                      </div>
                    ))}




                  </div>

                </div>
              </div>
            )}

            {formData.propertyType === 'terrain' && (
              <div className="mt-4 space-y-4">
                <Input
                  type="number"
                  name="landSize"
                  placeholder="Surface du terrain (m²)"
                  value={formData.landSize}
                  onChange={handleInputChange}
                  className="w-full py-6 p-3 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className='w-full flex items-center justify-center gap-3'>
                  <label htmlFor="titre_foncier" className={`bg-white py-4 px-5 rounded-md border border-gray-500 relative ${formData.titleType === 'titre_foncier' ? "bg-orange-300" : "bg-white"}`} ><p>{formData.titleType === 'titre_foncier' && (<CheckCircle className='w-4 h-4 absolute top-1 left-1' />)}</p>Titre foncier</label>
                  <label htmlFor="baie" className={`bg-white py-4 px-5 rounded-md border border-gray-500 relative ${formData.titleType === 'baie' ? "bg-orange-300" : "bg-white"}`}><p>{formData.titleType === 'baie' && (<CheckCircle className='w-4 h-4 absolute top-1 left-1' />)}</p>Baie</label>
                </div>

                <input type="radio" name="" id="titre_foncier" checked={formData.titleType === 'titre_foncier'} value="titre_foncier" className='hidden' onChange={(e) => setFormData({ ...formData, titleType: e.target.value })} />
                <input type="radio" name="" id="baie" checked={formData.titleType === 'baie'} value="baie" className='hidden' onChange={(e) => setFormData({ ...formData, titleType: e.target.value })} />


              </div>
            )}
          </div>
        );
      case 3:
        return (
          <div>
            <select
              name="saleType"
              value={formData.saleType}
              onChange={handleInputChange}
              className="w-full p-3 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Location ou Vente?</option>
              <option value="location">Location</option>
              <option value="vente">Vente</option>

            </select>
            {!formData.saleType ? (
              <>
                {errors.saleType && <p className="text-white bg-red-500 py-3 my-4 px-4 rounded-md">{errors.saleType}</p>}

              </>

            ) : (
              <div></div>
            )}
          </div>

        );
      case 4:
        return (
          <div>
            <div className='w-full flex items-center justify-center gap-3'>
              <label htmlFor="entreprise" className={`bg-white py-4 px-5 rounded-md border border-gray-500 relative ${formData.sellerType === 'entreprise' ? "bg-orange-300" : "bg-white"}`} ><p>{formData.sellerType === 'entreprise' && (<CheckCircle className='w-4 h-4 absolute top-1 left-1' />)}</p>Entreprise</label>
              <label htmlFor="particulier" className={`bg-white py-4 px-5 rounded-md border border-gray-500 relative ${formData.sellerType === 'particulier' ? "bg-orange-300" : "bg-white"}`}><p>{formData.sellerType === 'particulier' && (<CheckCircle className='w-4 h-4 absolute top-1 left-1' />)}</p>Particulier</label>
            </div>

            <input type="radio" name="" id="entreprise" checked={formData.sellerType === 'entreprise'} value="entreprise" className='hidden' onChange={(e) => setFormData({ ...formData, sellerType: e.target.value })} />
            <input type="radio" name="" id="particulier" checked={formData.sellerType === 'particulier'} value="particulier" className='hidden' onChange={(e) => setFormData({ ...formData, sellerType: e.target.value })} />


            {!formData.sellerType ? (
              <>
                {errors.sellerType && <p className="text-white bg-red-500 py-3 my-4 px-4 rounded-md">{errors.sellerType}</p>}

              </>

            ) : (
              <div></div>
            )}

          </div>

        );
      case 5:
        return (
          <div>
            <h1 className="text-1xl mb-4 font-semibold" >l'adresse du bien</h1>

            <Input
              type="text"
              name="address"
              placeholder="Adresse du lieu"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full p-3 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {!formData.address ? (
              <>
                {errors.address && <p className="text-white bg-red-500 py-3 my-4 px-4 rounded-md">{errors.address}</p>}

              </>

            ) : (
              <div></div>
            )}
          </div>

        );
      case 6:
        return (
          <div>
            <h1 className="text-1xl mb-4 font-semibold" >Description:</h1>
            <textarea
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full p-3 pb-32 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {!formData.description ? (
              <>
                {errors.description && <p className="text-white bg-red-500 py-3 my-4 px-4 rounded-md">{errors.description}</p>}

              </>

            ) : (
              <div></div>
            )}
          </div>

        );
      case 7:
        return (
          <div>
            <h1 className="text-1xl mb-4 font-semibold" >le prix de vente:</h1>
            <Input
              type="number"
              name="price"
              placeholder="Prix"
              value={formData.price}
              onChange={handleInputChange}
              className="w-full p-3 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {!formData.price ? (
              <>
                {errors.price && <p className="text-white bg-red-500 py-3 my-4 px-4 rounded-md">{errors.price}</p>}

              </>

            ) : (
              <div></div>
            )}
          </div>
        );
      case 8:
        return (
          <div className='w-full'>
            <h1 className="text-1xl mb-4 font-semibold" >Ajouter des images</h1>
            <div>
              <label className=' w-fit h-[40px] border rounded-md flex items-center justify-center gap-2 px-3 bg-slate-100' htmlFor="image"><FileUp className='w-5 h-5' />Choisier des images</label>
            </div>
            <Input
              type="file"
              name="images"
              id="image"
              accept="image/*"
              multiple
              onChange={handleImageChange}
              className="w-full p-3 border hidden bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {!formData.images ? (
              <>
                {errors.images && <p className="text-white bg-red-500 py-3 my-4 px-4 rounded-md">{errors.images}</p>}

              </>

            ) : (
              <div></div>
            )}
            <div className='w-full'>

              <div className='grid xl:grid-cols-3 md:grid-cols-2  gap-2 my-2'>
                {formData?.images?.map((url, index) => (
                  <div key={index} className='w-[150px] gap-2 h-[120px] relative bg-white rounded-sm'>
                    <p className='flex items-center text-red-500 bg-white cursor-pointer absolute top-1 right-1 p-1'>
                      <Trash className='w-5 h-5 text-red-500   rounded-full font-bold' onClick={() => handleDelete(index)} />

                    </p>
                    <Image src={url} width="100" height="100" className=" w-full h-full object-cover rounded-sm" alt='image de poste' />
                  </div>
                )
                )}
              </div>

            </div>
          </div>

        );
      default:
        return null;
    }
  };

  return (
    <div className="relative h-[98vh] w-[99vw] max-w-6xl mx-auto flex flex-col justify-center items-center">
     
        <Nav />
    <div className='w-full flex justify-center items-center'>
       <form onSubmit={handleSubmit} className='w-full'>
        <div className="max-w-xl w-full p-6 rounded-md">

          {renderStepContent()}
        </div>
        <div className="absolute bottom-4 w-full flex justify-between px-6">
          {step > 1 && (
            <button
              onClick={handleBack}
              className="px-10 py-2 bg-slate-200 font-thin text-black rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Back
            </button>
          )}
          {step < 8 && (
            <div
              onClick={handleNext}
              className="px-10 py-2 flex flex-en items-center gap-3 font-bold border border-orange-500 text-orange-500 rounded-full hover:bg-orange-500 hover:text-white outline-none  "
            >
              Next
              <MoveRight className='w-4 h-4' />
            </div>
          )}
          {step >= 8 && (
            <button
              onClick={handleClick}
              className="px-10 py-2 flex items-center gap-3 border border-orange-500 text-orange-500 rounded-full hover:bg-orange-500 hover:text-white outline-none  "
              type='submit'
            >
              soumettre
              <CheckCheckIcon />

            </button>
          )}
        </div>
      </form>

    </div>
     
    
     
    </div>
  );
};

export default Form;
