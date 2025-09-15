// save this as checkPassword.js
import crypto from "crypto";

const storedHash =
  "db22b304ca089bcba3a9eccd3a48ece18aa08a5012f3ef71dd189c8b6406dd7d063e7366f798e14d1c12fbc985d3ae1293357b20fce4c39ba034b0cc9e53bb33";

const salt =
  "fabcd15d8206723329951f9b2868d78c40a9df4ac1c5d983b8f7b4f7d10348926ad21fa6ff66e86bcbf0bc279b9b6f20f0c8e700cb637608c2f7c0643ef095e4";

const plainPassword = "12345";

function sha512(input) {
  return crypto.createHash("sha512").update(input).digest("hex");
}

function verifyPassword(password, salt, storedHash) {
  const candidates = {
    "password+salt": sha512(password + salt),
    "salt+password": sha512(salt + password),
    "sha512(password)+salt": sha512(sha512(password) + salt),
    "sha512(password+salt)": sha512(sha512(password + salt)),
    "sha512(salt+password)": sha512(sha512(salt + password)),
    "sha512(password)+sha512(salt)": sha512(sha512(password) + sha512(salt)),
    "sha512(salt)+sha512(password)": sha512(sha512(salt) + sha512(password)),
  };

  for (const [method, hash] of Object.entries(candidates)) {
    if (hash === storedHash) {
      console.log(`✅ Match found using method: ${method}`);
      return;
    }
  }

  console.log("❌ No match found with tested methods.");
}

verifyPassword(plainPassword, salt, storedHash);
