"use client";
import React from "react";
import InfoModal from "./InfoModal";
import useInfoModal from "@/hooks/useInfoModal";

const InfoModalWrapper = () => {
  const { isOpen, closeModal } = useInfoModal();
  return <InfoModal visible={isOpen} onClose={closeModal} />;
};

export default InfoModalWrapper;
