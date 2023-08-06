variable "AWS_ACCESS_KEY_ID" {
  default = ""
  sensitive = false
}

variable "AWS_SECRET_ACCESS_KEY" {
  default = ""
  sensitive = true
}

variable "project_name" {
  type    = string
  default = "model-ui"
}