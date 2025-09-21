"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Copy, Check, FileText } from "lucide-react"

interface OutputDisplayProps {
  output: string
  isGenerating: boolean
}

export function OutputDisplay({ output, isGenerating }: OutputDisplayProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    if (!output) return

    try {
      await navigator.clipboard.writeText(output)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-lg font-semibold text-card-foreground flex items-center gap-2">
          <FileText className="w-5 h-5" />
          Generated Output
        </CardTitle>
        {output && (
          <Button variant="outline" size="sm" onClick={handleCopy} className="flex items-center gap-2 bg-transparent">
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                Copy
              </>
            )}
          </Button>
        )}
      </CardHeader>
      <CardContent>
        <div className="h-[calc(100vh-320px)] overflow-y-auto">
          {isGenerating ? (
            <div className="flex items-center justify-center h-full">
              <div className="text-center space-y-4">
                <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin mx-auto" />
                <p className="text-muted-foreground">Generating your enhanced prompt...</p>
              </div>
            </div>
          ) : output ? (
            <div className="prose prose-sm max-w-none">
              <pre className="whitespace-pre-wrap text-sm text-card-foreground bg-muted/30 p-4 rounded-lg border">
                {output}
              </pre>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="text-center space-y-4 max-w-md">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto">
                  <FileText className="w-8 h-8 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-2">Ready to Generate</h3>
                  <p className="text-sm text-muted-foreground">
                    Enter your prompt and select up to 4 keywords from the categories on the left, then click generate
                    to see your enhanced prompt.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
