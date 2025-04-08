import Blockquote from '@tiptap/extension-blockquote'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import {Bold} from '@tiptap/extension-bold';
import {Italic} from '@tiptap/extension-italic';
import {Strike} from '@tiptap/extension-strike';
import {Code} from '@tiptap/extension-code';
import {EditorContent, useEditor} from '@tiptap/react'
import React from 'react'
import "./styles.css"
import IconButton from "@/components/ui/icon-button";
import {Underline} from "@tiptap/extension-underline";

export default () => {
    const editor = useEditor({
        extensions: [
            Document,
            Paragraph,
            Text,
            Blockquote,
            Bold,
            Italic,
            Underline,
            Strike,
            Code,
        ],
        content: `
      
    `,
    })

    if (!editor) {
        return null
    }

    return (
        <>
            <div
                className="flex flex-wrap justify-center items-center gap-2 border rounded-md p-2 bg-white dark:bg-blue-950 shadow-sm">
                <IconButton
                    onClick={() => editor.chain().focus().toggleBold().run()}>B</IconButton>
                <IconButton
                    onClick={() => editor.chain().focus().toggleItalic().run()}>I</IconButton>
                <IconButton
                    onClick={() => editor.chain().focus().toggleUnderline().run()}>U</IconButton>
                <IconButton
                    onClick={() => editor.chain().focus().toggleStrike().run()}>S</IconButton>
                <IconButton
                    onClick={() => editor.chain().focus().toggleBlockquote().run()}>❝
                </IconButton>
                <IconButton
                    onClick={() => editor.chain().focus().toggleCode().run()}>{'</>'}</IconButton>
                <button
                    className="px-2 py-1 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800">•
                </button>
                <button
                    className="px-2 py-1 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800">1.
                </button>
            </div>


            <EditorContent editor={editor}/>
        </>
    )
}