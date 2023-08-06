variable "AWS_ACCESS_KEY_ID" {
  sensitive = false
}

variable "AWS_SECRET_ACCESS_KEY" {
  sensitive = true
}

variable "project_name" {
  type    = string
  default = "model-ui"
}