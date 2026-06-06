"use client";
import style from "@/style/image-picker.module.css";
import Image from "next/image";
import { ChangeEvent, useRef, useState } from "react";

const ImagePicker = ({ label, name }: { label: string; name: string }) => {
  const [pickedImage, setPickedImage] = useState<string | null>(null);
  const imgRef = useRef<HTMLInputElement>(null);

  const handlerPickClick = () => {
    imgRef.current?.click();
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file: File | null = e.target.files?.[0] ?? null;
    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      setPickedImage(fileReader.result as string);
    };
  };
  return (
    <div className={style.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={style.controls}>
        <div className={style.preview}>{pickedImage ? <Image src={pickedImage} alt="preview-image" fill /> : <p>No image picked yet.</p>}</div>

        <input className={style.input} type="file" id={name} accept="image/png, image/jpeg" name={name} ref={imgRef} onChange={handleImageChange} required />
        <button className={style.button} type="button" onClick={handlerPickClick}>
          Pick an image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
