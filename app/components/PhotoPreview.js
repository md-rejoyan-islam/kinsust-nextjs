"use client";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

export default function PhotoPreview({ src, children }) {
  return (
    <figure>
      <PhotoProvider>
        <PhotoView src={src}>{children}</PhotoView>
      </PhotoProvider>
    </figure>
  );
}
