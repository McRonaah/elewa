import { StoryBlock } from "@app/model/convs-mgr/stories/blocks/main";

/**
 * Block which sends a file.
 */
export interface FileMessageBlock extends StoryBlock
{
  /** Message to accompany file */
  message?: string;

  /** File source of the message block */
  fileSrc?: string;

  defaultTarget?: string;

  /**
   * To improve performance, we upload the file to whatsapp first, then we get the url
   *   as it takes time to do it in real time when sending the message
   * 
   * This is the url we get back after we upload the file to whatsapp 
   */
  whatsappMediaId?: string;
  
}

/**
 * Block which sends a message in the form of an image.
 */
export interface ImageMessageBlock extends FileMessageBlock {}

/**
 * Block which sends a message in the form of a voice message.
 */
export interface VoiceMessageBlock extends FileMessageBlock { }

/**
 * Block that sends a message in the form of a video
 */
export interface VideoMessageBlock extends FileMessageBlock{

  /**This is store the file name that has been retrieved when uploading the file */
  fileName?: string;
  mediaQuality?: string;
}

/** 
 * Blocks which sends a message in the form of a sticker message
 */
export interface StickerMessageBlock extends FileMessageBlock { }

/*
 * Block that sends a message in the form of a document to the user 
 */
export interface DocumentMessageBlock extends FileMessageBlock{}
