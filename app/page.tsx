"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { PromptInputs } from "@/components/prompt-inputs"
import { OutputDisplay } from "@/components/output-display"
import { Sparkles } from "lucide-react"

export default function PromptGenerator() {
  const [prompt, setPrompt] = useState("")
  const [selectedKeywords, setSelectedKeywords] = useState<Record<string, string[]>>({})
  const [generatedOutput, setGeneratedOutput] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)

  const handleSubmit = async () => {
    if (!prompt.trim()) return

    setIsGenerating(true)

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Generate output based on prompt and selected keywords
    const keywordsList = Object.values(selectedKeywords).flat()
    const keywordsText = keywordsList.length > 0 ? `\n\nKeywords: ${keywordsList.join(", ")}` : ""

    const output = `Enhanced Prompt: ${prompt}${keywordsText}

Generated Content:
Based on your input "${prompt}" and the selected keywords, here's an enhanced version that incorporates the chosen elements for better results.

This prompt has been optimized with your selected keywords to provide more targeted and relevant output. The combination of your original idea with the specific keywords creates a more focused and effective prompt.`

    setGeneratedOutput(output)
    setIsGenerating(false)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Prompt Generator</h1>
              <p className="text-sm text-muted-foreground">Create enhanced prompts with keyword selection</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 h-[calc(100vh-200px)]">
          {/* Left Panel - Input Section (40% width) */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-card-foreground">Input Configuration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Prompt Input */}
                <div className="space-y-2">
                  <Label htmlFor="prompt" className="text-sm font-medium text-foreground">
                    Your Prompt
                  </Label>
                  <Textarea
                    id="prompt"
                    placeholder="Enter your prompt here..."
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    className="min-h-[120px] resize-none"
                  />
                </div>

                {/* Keyword Selection Dropdowns */}
                <PromptInputs selectedKeywords={selectedKeywords} onKeywordsChange={setSelectedKeywords} />

                {/* Submit Button */}
                <Button
                  onClick={handleSubmit}
                  disabled={!prompt.trim() || isGenerating}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  size="lg"
                >
                  {isGenerating ? (
                    <>
                      <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 mr-2" />
                      Generate Enhanced Prompt
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Panel - Output Section (60% width) */}
          <div className="lg:col-span-3">
            <OutputDisplay output={generatedOutput} isGenerating={isGenerating} />
          </div>
        </div>
      </div>
    </div>
  )
}
