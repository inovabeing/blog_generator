"use client"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"

interface PromptInputsProps {
  selectedKeywords: Record<string, string[]>
  onKeywordsChange: (keywords: Record<string, string[]>) => void
}

const keywordCategories = {
  style: {
    label: "Style & Tone",
    options: [
      "Professional",
      "Casual",
      "Creative",
      "Technical",
      "Friendly",
      "Formal",
      "Conversational",
      "Authoritative",
    ],
  },
  format: {
    label: "Content Format",
    options: ["Blog Post", "Email", "Social Media", "Report", "Presentation", "Article", "Newsletter", "Script"],
  },
  audience: {
    label: "Target Audience",
    options: [
      "Beginners",
      "Experts",
      "General Public",
      "Students",
      "Professionals",
      "Executives",
      "Customers",
      "Colleagues",
    ],
  },
  purpose: {
    label: "Content Purpose",
    options: ["Inform", "Persuade", "Entertain", "Educate", "Sell", "Explain", "Inspire", "Guide"],
  },
  industry: {
    label: "Industry/Topic",
    options: ["Technology", "Healthcare", "Finance", "Education", "Marketing", "Design", "Business", "Science"],
  },
}

export function PromptInputs({ selectedKeywords, onKeywordsChange }: PromptInputsProps) {
  const handleKeywordSelect = (category: string, keyword: string) => {
    const currentKeywords = selectedKeywords[category] || []

    // Check if already selected
    if (currentKeywords.includes(keyword)) return

    // Check total selected keywords across all categories (max 4)
    const totalSelected = Object.values(selectedKeywords).flat().length
    if (totalSelected >= 4) return

    const updatedKeywords = {
      ...selectedKeywords,
      [category]: [...currentKeywords, keyword],
    }

    onKeywordsChange(updatedKeywords)
  }

  const handleKeywordRemove = (category: string, keyword: string) => {
    const currentKeywords = selectedKeywords[category] || []
    const updatedKeywords = {
      ...selectedKeywords,
      [category]: currentKeywords.filter((k) => k !== keyword),
    }

    if (updatedKeywords[category].length === 0) {
      delete updatedKeywords[category]
    }

    onKeywordsChange(updatedKeywords)
  }

  const totalSelected = Object.values(selectedKeywords).flat().length

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Label className="text-sm font-medium text-foreground">Keyword Selection</Label>
        <span className="text-xs text-muted-foreground">{totalSelected}/4 selected</span>
      </div>

      {/* Selected Keywords Display */}
      {totalSelected > 0 && (
        <div className="flex flex-wrap gap-2 p-3 bg-muted/50 rounded-lg">
          {Object.entries(selectedKeywords).map(([category, keywords]) =>
            keywords.map((keyword) => (
              <Badge
                key={`${category}-${keyword}`}
                variant="secondary"
                className="bg-accent text-accent-foreground hover:bg-accent/80"
              >
                {keyword}
                <button
                  onClick={() => handleKeywordRemove(category, keyword)}
                  className="ml-1 hover:bg-accent-foreground/20 rounded-full p-0.5"
                >
                  <X className="w-3 h-3" />
                </button>
              </Badge>
            )),
          )}
        </div>
      )}

      {/* Dropdown Selectors */}
      <div className="space-y-3">
        {Object.entries(keywordCategories).map(([category, { label, options }]) => (
          <div key={category} className="space-y-1">
            <Label className="text-xs font-medium text-muted-foreground">{label}</Label>
            <Select onValueChange={(value) => handleKeywordSelect(category, value)} disabled={totalSelected >= 4}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder={`Select ${label.toLowerCase()}...`} />
              </SelectTrigger>
              <SelectContent>
                {options.map((option) => {
                  const isSelected = selectedKeywords[category]?.includes(option)
                  return (
                    <SelectItem
                      key={option}
                      value={option}
                      disabled={isSelected}
                      className={isSelected ? "opacity-50" : ""}
                    >
                      {option} {isSelected && "✓"}
                    </SelectItem>
                  )
                })}
              </SelectContent>
            </Select>
          </div>
        ))}
      </div>

      {totalSelected >= 4 && (
        <p className="text-xs text-accent">Maximum 4 keywords selected. Remove some to add others.</p>
      )}
    </div>
  )
}
