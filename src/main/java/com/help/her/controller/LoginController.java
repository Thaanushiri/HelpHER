// package com.help.her.controller;

// import java.util.HashMap;
// import java.util.List;
// import java.util.Map;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.DeleteMapping;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import com.help.her.model.Login;
// import com.help.her.service.LoginService;

// @RestController
// @RequestMapping("/login")
// @CrossOrigin(origins = "http://localhost:3000")
// public class LoginController {

//     @Autowired
//     private LoginService loginService;

//     @PostMapping
//     public ResponseEntity<?> createLogin(@RequestBody Login login) {
//         if (loginService.usernameExists(login.getUsername())) {
//             return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("success", false, "message", "Username already exists"));
//         }
//         if (loginService.emailExists(login.getEmail())) {
//             return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("success", false, "message", "Email already exists"));
//         }

//         Login newLogin = loginService.createLogin(login);
//         return ResponseEntity.ok(Map.of("success", true, "message", "Registration successful", "login", newLogin));
//     }

//     @GetMapping
//     public List<Login> getAllLogins() {
//         return loginService.getAllLogins();
//     }

//     @GetMapping("/{id}")
//     public ResponseEntity<Login> getLoginById(@PathVariable Long id) {
//         return loginService.getLoginById(id)
//                 .map(ResponseEntity::ok)
//                 .orElse(ResponseEntity.notFound().build());
//     }

//     @DeleteMapping("/{id}")
//     public ResponseEntity<Void> deleteLogin(@PathVariable Long id) {
//         if (loginService.getLoginById(id).isPresent()) {
//             loginService.deleteLogin(id);
//             return ResponseEntity.ok().build();
//         } else {
//             return ResponseEntity.notFound().build();
//         }
//     }

//     @PostMapping("/check")
//     public ResponseEntity<?> checkLogin(@RequestBody Login login) {
//         Login existingLogin = loginService.findByEmail(login.getEmail());
//         if (existingLogin != null && existingLogin.getPassword().equals(login.getPassword())) {
//             Map<String, Object> response = new HashMap<>();
//             response.put("success", true);
//             response.put("message", "Login successful!");
//             response.put("role", existingLogin.getRole());
//             return ResponseEntity.ok(response);
//         } else {
//             return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("success", false, "message", "Invalid email or password"));
//         }
//     }
// }



package com.help.her.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.help.her.model.Login;
import com.help.her.service.LoginService;

@RestController
@RequestMapping("/login")
@CrossOrigin(origins = "http://localhost:3000")
public class LoginController {

    @Autowired
    private LoginService loginService;

    private static final String ADMIN_EMAIL = "admin@example.com";
    private static final String ADMIN_PASSWORD = "adminpassword";

    @PostMapping
    public ResponseEntity<?> createLogin(@RequestBody Login login) {
        if (loginService.usernameExists(login.getUsername())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("success", false, "message", "Username already exists"));
        }
        if (loginService.emailExists(login.getEmail())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("success", false, "message", "Email already exists"));
        }

        Login newLogin = loginService.createLogin(login);
        return ResponseEntity.ok(Map.of("success", true, "message", "Registration successful", "login", newLogin));
    }

    @GetMapping
    public List<Login> getAllLogins() {
        return loginService.getAllLogins();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Login> getLoginById(@PathVariable Long id) {
        return loginService.getLoginById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteLogin(@PathVariable Long id) {
        if (loginService.getLoginById(id).isPresent()) {
            loginService.deleteLogin(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/check")
    public ResponseEntity<?> checkLogin(@RequestBody Login login) {
        // Check for admin credentials
        if (ADMIN_EMAIL.equals(login.getEmail()) && ADMIN_PASSWORD.equals(login.getPassword())) {
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("message", "Admin login successful!");
            response.put("role", "admin"); // Admin role for dashboard
            return ResponseEntity.ok(response);
        }

        // Check for regular user credentials
        Login existingLogin = loginService.findByEmail(login.getEmail());
        if (existingLogin != null && existingLogin.getPassword().equals(login.getPassword())) {
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("message", "Login successful!");
            response.put("role", existingLogin.getRole());
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("success", false, "message", "Invalid email or password"));
        }
    }
}

