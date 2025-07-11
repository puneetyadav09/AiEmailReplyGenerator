package com.email.writer.app;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RootController {

    @GetMapping("/")
    public String home() {
        return "✅ Email Writer API is running. Use POST /api/email/generate";
    }
}
