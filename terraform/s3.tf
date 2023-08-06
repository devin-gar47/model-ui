resource "aws_s3_bucket" "website_bucket" {
  bucket = "${var.project_name}-website"
}

resource "aws_s3_bucket_website_configuration" "website_bucket_configuration" {
  bucket = aws_s3_bucket.website_bucket.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "index.html"
  }
}

resource "aws_s3_bucket_public_access_block" "example" {
  bucket = aws_s3_bucket.website_bucket.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_policy" "global_access" {
  bucket = aws_s3_bucket.website_bucket.id
  policy = <<EOF
                {
                "Version": "2012-10-17",
                "Statement": [
                    {
                    "Effect": "Allow",
                    "Principal": "*",
                    "Action": [ "s3:GetObject" ],
                    "Resource": "${aws_s3_bucket.website_bucket.arn}/*"
                    }
                ]
                }
            EOF
}